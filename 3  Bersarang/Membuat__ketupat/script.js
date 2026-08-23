var hasil = "";
var jumlah = 5;
for (i = 1; i <= jumlah; i++) {
  // inner loop: untuk spasi
  for (s = 0; s < (jumlah - i); s++) {
    hasil += " "
  }

  // inner loop: untuk icon nya
  for (b = 0; b < (2*i -1); b++) {
    hasil += "#";
  }
  hasil += "\n"
}
// console.log(hasil)

// var hasil = "";

for ( i = 1; i <= jumlah; i++) {
  for (s = (i*2 - 1); s > i; s--) {
    hasil += " ";
  }
  
  for (icon = (2*jumlah - i); icon >= i; icon-- ) {
    hasil += ('+')
  }
  hasil += "\n";
}

console.log(hasil)

