import * as readline from 'readline';
import * as fs from 'fs';
import * as path from 'path';

function ask(question: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

function saveToCSV(data: { name: string; serie: number; absences: number; grades: number[] }) {
  const header = [
    "Nome",
    "Série",
    "Faltas",
    ...subjects.flatMap(subject => Array.from({ length: 8 }, (_, i) => `${subject} ${i + 1}`))
  ];

  const row = [
    data.name,
    data.serie.toString(),
    data.absences.toString(),
    ...data.grades.map(g => g.toString())
  ];

  const csvFilePath = path.join(__dirname, 'students.csv');

  const fileExists = fs.existsSync(csvFilePath);

  if (!fileExists) {
    fs.writeFileSync(csvFilePath, header.join(",") + "\n", { encoding: "utf8" });
  }

  fs.appendFileSync(csvFilePath, row.join(",") + "\n", { encoding: "utf8" });
}

const subjects = ['Matemática', 'Português', 'Geografia', 'História', 'Química'];

async function main() {
  const name: string = await ask("Digite o seu nome: ");
  const serie: number = Number(await ask("Digite a sua série: "));
  const absences: number = Number(await ask("Digite o total de faltas: "));

  const grades: number[] = []
  for (const subject of subjects) {
    for (let i = 1; i <= 8; i++) {
      const grade: number = Number(await ask(`Digite a nota ${i} da matéria ${subject}: `));
      grades.push(grade)
    }
  }

  const sum: number = grades.reduce((acc, curr) => acc += curr,0)
  const avg = sum / grades.length
  const status: 'Aprovado' | "Reprovado" = (absences  < (100 * 0.75) || avg < 7) ? "Reprovado": "Aprovado"

  console.log(`========== Boletim: ==========`);
  console.log(`\nNome: ${name}`);
  console.log(`Série: ${serie}`);
  console.log(`Faltas: ${absences} | Limite ${(100 * 0.75)}`);
  console.log(`Média de notas do aluno ${avg}`);
  console.log(`\nSituação: ${status}`);
  console.log(`=============================`);


  saveToCSV({
    absences,
    name,
    grades,
    serie
  })

}

main();
