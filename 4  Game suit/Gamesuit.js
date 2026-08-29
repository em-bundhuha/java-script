// algoritma nya

var tanya = true;
while (tanya) {
  // menangkap pilihan Player
  var p = prompt("pilih : gajah, semut, orang");

  // menangkap pilihan Computer
  // membangkitkan bilangan random
  var comp = Math.random();

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }

  var hasil = "";
  // menentukan rules
  if (p == comp) {
    hasil = "Seri!";
  } else if (p == "gajah") {
    // if (comp == "orang") {
    //   hasil = "menang";
    // } else {
    //   hasil = "kalah";
    // }
    hasil = comp == "orang" ? "Menang!" : "Kalah!"; // Ternary
  } else if (p == "orang") {
    hasil = comp == "gajah" ? "Kalah!" : "Menang!";
  } else if (p == "semut") {
    hasil = comp == "orang" ? "Kalah!" : "Menang!";
  } else {
    hasil = "anda memasukan pilihan yang salah";
  }

  // menampilkan hasil
  alert("You :: " + p + "\ncomp :: " + comp + "\n\t You <>\t  " + hasil);
  tanya = confirm("Lagi?");
}

alert("terimakasih sudah bermain. ");