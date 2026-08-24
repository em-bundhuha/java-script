var Output = "";
var baris = 5;
for (i = 1; i <= baris; i++) {
  // inner loop: untuk spasi
  for (spasi = 0; spasi < (baris - i); spasi++) {
    Output += " "
  }

  // inner loop: untuk icon nya
  for (icon = 0; icon < (2*i -1); icon++) {
    Output += "#";
  }
  Output += "\n"
}
// console.log(Output)

// var Output = "";

for ( i = 1; i <= baris; i++) {
  for (s = (i*2 - 1); s > i; s--) {
    Output += " ";
  }
  
  for (icon = (2*baris - i); icon >= i; icon-- ) {
    Output += ('+')
  }
  Output += "\n";
}

console.log(Output)

