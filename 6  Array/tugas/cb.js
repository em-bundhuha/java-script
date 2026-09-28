let ary = ['abd', 'saya'];
let hapusPenumpang = function( namaPenumpang) {
  if( ary.length === 0 ) {
    console.log('Angkot sedang kosong');
  } else {
    ary.find(function(e, i) {
      if( e[i] === namaPenumpang ) {
        e[i] = undefined;
        console.log(namaPenumpang + ' sudah turun')
      } else if( namaPenumpang !== e[i] ) {
        return console.log(namaPenumpang + ' tidak ada')
      }
    })
  }
}

hapusPenumpang('saya');
console.log(ary);