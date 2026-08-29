var hasil = "";

var angka = Math.floor(Math.random() * 10) + 1;

var kesempatan = 3;
for (let i = 1; i <= kesempatan; i++) {
  var tebakan = parseInt(prompt("Tebak angka 1 - 10: "));

  if (tebakan >= 1 && tebakan <= 10) {
    hasil = "";
    if (tebakan == angka) {
      alert((hasil += "tebakan anda \t" + tebakan + "\nBenar!"));
      break;
    } else if (tebakan < angka) {
      alert((hasil += "tebakan anda \t" + tebakan + "\nterlalu rendah\n"));
    } else {
      alert((hasil += "tebakan anda \t" + tebakan + "\nterlalu tinggi"));
    }
  } else {
    alert((hasil += "angka yang anda masukkan tidak termasuk dari 1-10"));
  }
}
