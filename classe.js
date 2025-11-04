// class Carro{
//     constructor(marca, ano, modelo){
//         this.marca = marca;
//         this.modelo = modelo;
//         this.ano = ano;
//     }
//     descrever(){
//         console.log(`Este carro é um ${this.marca} ${this.modelo} de ${this.ano}`)
//     }
// }

// const carro1 = new Carro('fiat', '2006', 'uno');

// carro1.descrever();


///////////////////////////////////////////////////////////////////////////////////


class Produto{
    constructor(nome, preco, estoque){
        this.estoque = estoque;
        this.nome = nome;
        this.preco = preco;
    }
    vender(quantidade){
        return this.estoque -=quantidade
    }
    reposicao(quantidade){
        return this.estoque +=quantidade
    }
}

const newProduto = new Produto('Banana', 12, 7);

console.log(`Foram vendidas ${newProduto.vender(4)} de ${newProduto.nome}`);
console.log(`No estoque de ${newProduto.nome} agora possuimos ${newProduto.reposicao(2)+" "+ newProduto.nome}`);
