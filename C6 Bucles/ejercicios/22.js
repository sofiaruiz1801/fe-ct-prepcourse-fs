function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  var i = 0
  var suma = num
  do{
    suma = suma +5;
    i = i+1;
  }while (i<8);
    
  return suma;
}

module.exports = doWhile;