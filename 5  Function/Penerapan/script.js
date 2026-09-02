function PenghitungDuaKubus(a, b) {
  // var volumeA ;
  // var volumeB;
  // var total;
  
  // volumeA = a * a * a;
  // volumeB = b * b * b;
  
  // total = volumeA + volumeB;

  //  di ringkas

  var total;
  total = a * a * a + b * b  * b;
  
  return total;
}
var a = 6;
var b = 4;

var c = 10;
var d = 15

console.log('kotak kecil ' + PenghitungDuaKubus(a, b));
console.log('kotak besar ' + PenghitungDuaKubus(c, d))