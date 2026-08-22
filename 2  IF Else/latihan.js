// saya sedan mencoba jika nilai nya ganjil atau genapa atau termasuk hruf

// var imput = ;

// if ( imput % 2 === 0) {
//   alert('nilai anda termasuk genap')
// }

// if (imput % 2 === 1)  {
//   alert('nilai anda termasuk ganjil')
// }

// else {
//   alert('nilai anda tidak termasuk angka mungkin saja termasuk hruf atau icon tertentu')
// }

var stok = 20;
var stokLaku = Number(prompt("masukkan jumlah barang yang laku: "));
var barang_cacat = Number(prompt("masukkan no barang yang cacat atau rusak: "));
var cacat_permanen = 10;
var no_barang = 1;

for (no_barang; no_barang <= stok; no_barang++) {
  if (no_barang <= stokLaku && no_barang == barang_cacat) {
    console.log("barang no " + no_barang + " barang ini laku tapi cacat");
  } else if (no_barang == barang_cacat) {
    console.log("barang no " + no_barang + " cacat atau rusak");
  } else if (no_barang === cacat_permanen && no_barang !== stokLaku) {
    console.log(
      "barang no " + no_barang + " cacat atau rusak permanen dan gak laku",
    );
  } else if (no_barang === 15 || no_barang === 3) {
    console.log("barang no " + no_barang + " barang ini di return");
  }  else if (no_barang <= stokLaku) {
    console.log("no barang " + no_barang + " sudah laku")

  } else {
    console.log("barang no " + no_barang + " blom laku");
  }
}
