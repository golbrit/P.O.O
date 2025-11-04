class Funcionario {
    constructor(nome) {
        this.nome = nome;
    }
    calcularSalario() {
    }
}
class FuncionarioHorista extends Funcionario {
    constructor(nome, horasTrabalhadas, valorHora) {
        super(nome);
        this.horasTrabalhadas = horasTrabalhadas;
        this.valorHora = valorHora;
    }
    calcularSalario() {
        return this.horasTrabalhadas * this.valorHora;
    }
} 
class FuncionarioAssalariado extends Funcionario {
    constructor(nome, salarioMensal) {
      super(nome);
      this.salarioMensal = salarioMensal;
    }
  
    calcularSalario() {
        return this.salarioMensal;
    }
}
  
const funcionarios = [
    new FuncionarioHorista("beatriz", 160, 25),
    new FuncionarioAssalariado("jonas", 4000),
    new FuncionarioHorista("roberto", 120, 30),
];
  
console.log("salários do Funcionário");
funcionarios.forEach(func => {
console.log(`${func.nome}: R$ ${func.calcularSalario().toFixed(2)}`);
});


///////////////////////////////////////////////////////////////////


class Forma {
    calcularArea() {
    }
}
class Quadrado extends Forma {
    constructor(lado) {
      super();
      this.lado = lado;
    }
    calcularArea() {
        return this.lado ** 2;
    }
}
class Retangulo extends Forma {
    constructor(largura, altura) {
        super();
        this.largura = largura;
        this.altura = altura;
    }
    calcularArea() {
        return this.largura * this.altura;
    }
}
class Circulo extends Forma {
    constructor(raio) {
        super();
    this.raio = raio;
    }
    calcularArea() {
        return Math.PI * this.raio ** 2;
    }
}
const formas = [
    new Quadrado(4),
    new Retangulo(5, 3),
    new Circulo(2.5),
];
  
console.log("areas das formas");
formas.forEach(forma => {
console.log(`${forma.constructor.name}: ${forma.calcularArea().toFixed(2)}`);
});
  