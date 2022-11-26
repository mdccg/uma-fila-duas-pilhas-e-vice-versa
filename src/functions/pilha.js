class Pilha {
  constructor(maximo) {
    this.pilha = [];
    this.topo = -1;
    this.maximo = maximo;
  }

  isVazia() {
    return this.topo === -1;
  }

  isCheia() {
    return this.topo === this.maximo;
  }

  empilhar(elemento) {
    if (this.isCheia()) return;
    this.topo += 1;
    this.pilha[this.topo] = elemento;
  }

  desempilhar() {
    if (this.isVazia()) return;
    let ele = this.pilha[this.topo];
    this.topo -= 1;
    return ele;
  }

  imprimirPilha() {
    for (let i = this.topo; i >= 0; i--) {
      console.log(this.pilha[i]);
    }
  }
}

module.exports = Pilha;