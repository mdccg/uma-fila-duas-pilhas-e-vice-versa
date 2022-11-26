const FilaDuasPilhas = require('./src/functions/fila-duas-pilhas');
const PilhaDuasFilas = require('./src/functions/pilha-duas-filas');

const testaFilaDuasPilhas = () => {
  const fila = new FilaDuasPilhas(5);

  fila.enfileirar(1);
  fila.enfileirar(2);
  fila.enfileirar(3);
  fila.imprimir();
  fila.desenfileirar();
  fila.enfileirar(4);
  fila.enfileirar(5);
  fila.enfileirar(6);
  fila.enfileirar(7); // "A fila está cheia."
  fila.imprimir();

  for (let i = 0; i < 5; ++i) {
    fila.desenfileirar();
    // fila.imprimir();
  }

  fila.desenfileirar(); // "A fila está vazia."
}

const testaPilhaDuasFilas = () => {
  const pilha = new PilhaDuasFilas(5);

  pilha.empilhar(1);
  pilha.empilhar(2);
  pilha.empilhar(3);
  pilha.empilhar(4);
  pilha.empilhar(5);
  
  pilha.imprimirPilha();

  pilha.desempilhar();

  pilha.imprimirPilha();
  
  pilha.empilhar(5);
  pilha.empilhar(6); // "A pilha está cheia."
  
  for(let i = 0; i < 6; ++i) {
    pilha.desempilhar(); // "A pilha está vazia."
  }
}

testaFilaDuasPilhas();
testaPilhaDuasFilas();