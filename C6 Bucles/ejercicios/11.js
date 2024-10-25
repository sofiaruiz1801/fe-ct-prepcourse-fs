function estaEnRango(num) {
  // Retorna true si "num" es menor que 50 y mayor que 20.
  // De lo contrario, retornar false.
  // Tu código:
  if (20< num){
    if (num < 50){
      
      return true;
    }else {
      return false;
    }
  } else{
    return false;
  }
}

module.exports = estaEnRango;
