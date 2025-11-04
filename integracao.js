class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        return `Nome: ${this.nome}, Idade: ${this.idade}`;
    }
}

class Aluno extends Pessoa {
    #notas;

    constructor(nome, idade, matricula, curso) {
        super(nome, idade);
        this.matricula = matricula;
        this.curso = curso;
        this.#notas = [];
    }
    adicionarNota(nota) {
        if (nota < 0 || nota > 10) {
            return;
        }
        this.#notas.push(nota);
    }
    calcularMedia() {
        if (this.#notas.length === 0) {
            return 0;
        }
        const soma = this.#notas.reduce((a, b) => a + b, 0);
        return soma / this.#notas.length;
    }
    apresentar() {
        const media = this.calcularMedia().toFixed(2);
        return `Aluno: ${this.nome}, Curso: ${this.curso}, Média: ${media}`;
    }
}

class Professor extends Pessoa {
    constructor(nome, idade, disciplina) {
        super(nome, idade);
        this.disciplina = disciplina;
    }
    apresentar() {
        return `Professor: ${this.nome}, Disciplina: ${this.disciplina}`;
    }
}

class Turma {
    constructor(codigo, professor) {
        this.codigo = codigo;
        this.professor = professor;
        this.alunos = [];
    }
    adicionarAluno(aluno) {
        this.alunos.push(aluno);
    }
    listarAlunos() {
        this.alunos.forEach(a => console.log(a.nome));
    }
    exibirInformacoes() {
        console.log(`Turma: ${this.codigo}`);
        console.log(this.professor.apresentar());
        this.alunos.forEach(a => console.log(a.apresentar()));
    }
}

const prof1 = new Professor("Juliana Ferreira", 35, "História");
const aluno1 = new Aluno("Bruno", 18, "M105", "Administração");
const aluno2 = new Aluno("Larissa", 20, "M204", "Administração");

aluno1.adicionarNota(7);
aluno1.adicionarNota(8);
aluno1.adicionarNota(6);

aluno2.adicionarNota(9);
aluno2.adicionarNota(8);
aluno2.adicionarNota(9);

const turma1 = new Turma("ADM-2025", prof1);
turma1.adicionarAluno(aluno1);
turma1.adicionarAluno(aluno2);

turma1.exibirInformacoes();
