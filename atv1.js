const prompt = require('prompt-sync')();

let listaDeAlunos = [];

function adicionarAluno() {
    const id = parseInt(prompt("Informe o ID do aluno:"));
    const nome = prompt("Informe o nome do aluno:");
    const nota = parseFloat(prompt("Informe a nota do aluno:"));
    
    const novoAluno = { id: id, nome: nome, nota: nota };
    listaDeAlunos.push(novoAluno);
}

function buscarAlunoPorId(id) {
    return listaDeAlunos.find(aluno => aluno.id === id);
}

function calcularMediaDasNotas() {
    const totalNotas = listaDeAlunos.reduce((soma, aluno) => soma + aluno.nota, 0);
    return totalNotas / listaDeAlunos.length || 0;
}

adicionarAluno();
adicionarAluno();
adicionarAluno();

console.log("Lista de Alunos:");
console.log(listaDeAlunos);

const idParaBuscar = parseInt(prompt("Informe o ID do aluno que deseja buscar:"));
const alunoEncontrado = buscarAlunoPorId(idParaBuscar);
if (alunoEncontrado) {
    console.log(`Aluno encontrado: ${alunoEncontrado.nome}, Nota: ${alunoEncontrado.nota}`);
} else {
    console.log("Aluno não encontrado.");
}

const mediaDasNotas = calcularMediaDasNotas();
console.log(`Média das notas dos alunos: ${mediaDasNotas}`);