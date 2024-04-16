const prompt = require('prompt-sync')();

let alunos = {};


function adicionarAluno() {
    const id = prompt("Informe o ID do aluno: ");
    const nome = prompt("Informe o nome do aluno: ");
    const nota = parseFloat(prompt("Informe a nota do aluno: "));

    alunos[id] = { nome: nome, nota: nota };
}


function buscarAlunoPorId(id) {
    return alunos[id];
}

function calcularMedia() {
    const notas = Object.values(alunos).map(aluno => aluno.nota);
    const totalNotas = notas.reduce((acc, nota) => acc + nota, 0);
    const quantidadeAlunos = notas.length;
    return totalNotas / quantidadeAlunos
}

adicionarAluno();
adicionarAluno();
adicionarAluno();


console.log("Aluno com id 2:", buscarAlunoPorId(2));
console.log("Média das notas dos alunos:", calcularMedia());
