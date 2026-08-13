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
var stokLaku = 10;
var no_barang = 1;

for (no_barang; no_barang <= stok; no_barang++) {
  if (no_barang <= stokLaku) {
    console.log("barang no " + no_barang + " sudah laku");
  } else {
    console.log("barang no " + no_barang + " blom laku");
  }
}
