const Pilha = require('./pilha');

class FilaDuasPilhas {
  constructor(maximo) {
    this.maximo = maximo;
    this.pilha1 = new Pilha(maximo);
    this.pilha2 = new Pilha(maximo);
  }

  isCheia() {
    return this.pilha1.topo === this.maximo - 1;
  }

  isVazia() {
    return this.pilha1.isVazia();
  }

  enfileirar(elemento) {
    if (this.isCheia()) {
      console.log('A fila está cheia.');
      return;
    }

    this.pilha1.empilhar(elemento);
  }

  desenfileirar() {
    if (this.isVazia()) {
      console.log('A fila está vazia.');
      return;
    }

    while (!this.pilha1.isVazia()) {
      let elemento = this.pilha1.desempilhar();
      this.pilha2.empilhar(elemento);
    }

    this.pilha2.desempilhar();


    while (!this.pilha2.isVazia()) {
      let elemento = this.pilha2.desempilhar();
      this.pilha1.empilhar(elemento);
    }
  }

  imprimir() {
    console.log(this.pilha1.pilha.slice(0, this.pilha1.topo + 1).join(', '));
  }
}

module.exports = FilaDuasPilhas;