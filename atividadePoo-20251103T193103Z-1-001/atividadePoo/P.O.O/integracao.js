class Pessoa{
    constructor(nome, idade){
        this.nome = nome,
        this.idade = idade
    }
}
class Aluno extends Pessoa{
    constructor(nome, idade, matricula, curso, notas){
        super(nome, idade)
        this.matricula = matricula,
        this.curso = curso,
        this.notas = notas[4]
    }
}

