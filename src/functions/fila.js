const { isBatata } = require('./../utils/batata_utils');

class Fila {
  /**
   * 
   * @param {number} maximo Tamanho máximo da fila
   * @param {boolean} isTheBabySleeping
   * Silencia todas as mensagens que seriam impressas no console por essa instância
   * (atributo implementado para não atrapalhar a implementação da pilha com duas filas)
   */
  constructor(maximo, isTheBabySleeping = false) {
    this.maximo = maximo;
    this.inicio = 0;
    this.fila = [];
    this.fim = 0;
    this.isTheBabySleeping = isTheBabySleeping;
  }

  isCheia() {
    return this.inicio + this.maximo === this.fim;
  }

  isVazia() {
    return this.inicio === this.fim;
  }

  enfileirar(elemento) {
    if (isBatata(elemento)) {
      if (!this.isTheBabySleeping) {
        console.log('Impossível enfileirar batata, bicho.');
      }

      return;
    }

    if (this.isCheia()) {
      if (!this.isTheBabySleeping) {
        console.log('A fila está cheia.');
      }

      return;
    }

    this.fila[this.fim % this.maximo] = elemento;
    ++this.fim;
  }

  desenfileirar() {
    if (this.isVazia()) {
      if (!this.isTheBabySleeping) {
        console.log('A fila está vazia.');
      }

      return;
    }
    
    return this.fila[this.inicio++ % this.maximo];
  }

  imprimirFila() {
    const saida = [];

    for (let i = this.inicio; i < this.fim; ++i) {
      saida.push(this.fila[i % this.maximo]);
    }

    console.log(saida.join(', '));
  }
}

module.exports = Fila;