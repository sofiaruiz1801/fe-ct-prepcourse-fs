function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  var cociente = numero
  while (cociente > 1){
    cociente = cociente/2;
  }
  if (cociente === 1){
    return true;
  }
  else{
    return false;
  }
}

module.exports = esPotenciaDeDos;
