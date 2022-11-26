module.exports = {
  /**
   * Função que verifica se uma dada string é igual a uma batata
   */
  isBatata: (batataCandidata) => {
    return typeof batataCandidata === 'string' && batataCandidata.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s|\W/g, '').toLowerCase() === 'batata';
  }
};