const Fila = require('./fila');

class PilhaDuasFilas {
  constructor(maximo) {
    this.fila1 = new Fila(maximo, true);
    this.fila2 = new Fila(maximo, true);
  }

  isVazia() {
    return this.fila1.isVazia();
  }

  isCheia() {
    return this.fila1.isCheia();
  }

  empilhar(elemento) {
    if (this.isCheia()) {
      console.log('A pilha está cheia.');
      return;
    }

    this.fila1.enfileirar(elemento);
  }

  desempilhar() {
    if (this.isVazia()) {
      console.log('A pilha está vazia.');
      return;
    }

    let desempilhado;

    while (!this.fila1.isVazia()) {
      const desenfileirado = this.fila1.desenfileirar();

      if (this.fila1.isVazia()) {
        desempilhado = desenfileirado;
      } else {
        this.fila2.enfileirar(desenfileirado);
      }
    }
    
    while (!this.fila2.isVazia()) {
      const desenfileirado = this.fila2.desenfileirar();
      this.fila1.enfileirar(desenfileirado);
    }
    
    return desempilhado;
  }

  imprimirPilha() {
    if (this.isVazia()) {
      console.log('A pilha está vazia.');
      return;
    }

    const { fim, maximo, inicio, fila } = this.fila1;

    console.log('*'.repeat(10));

    for (let i = (fim - 1) % maximo; i >= inicio % maximo; --i) {
      console.log(fila[i]);
    }
  }
}

module.exports = PilhaDuasFilas;