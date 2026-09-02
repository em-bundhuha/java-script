function menghitungKubus(a, b) {
  var total;
  total = a * a * a + b * b * b;
  return total;
}

var ngaray = [10, 11, 14, 3, 54];

// function inputFromArray(dArray, index) {
//   var hasil = 0;
//   for(i = index; i < dArray.lenght; i++) {
//     hasil += dArray[i];
//   }
//   return hasil;
// }

console.log(
  "kotak ini memiliki total lebar " + menghitungKubus(ngaray[1],
  ngaray[0])
);
