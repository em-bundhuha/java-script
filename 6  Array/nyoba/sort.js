//  Nyoba membuat array dari angka random  kmd di rapikan
let array = [];
for (i = 1; i <= 10; i++) {
  hasil = Math.floor(Math.random() * 30) + 1;
  array.push(hasil);
}

array.sort(function (a, b) {
  return a - b;
});
console.log(array.join('-'));
