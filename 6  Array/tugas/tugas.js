let penumpang = ["suhail", undefined, "quriosh"];
let tambahPenumpang = function (namaPenumpang, Penumpang) {
  // console.log("menambahkan penumpang " + namaPenumpang + "  " + Penumpang);
  if (penumpang.length === 0) {
    penumpang.push(namaPenumpang);
    return penumpang;
  } else {
    for (i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;
      } else if (penumpang[i] == namaPenumpang) {
        console.log(" si " + namaPenumpang + " sudah ada");
        return penumpang;
      } else if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang);
        return penumpang;
      }
    }
  }
};

let hapusPenumpang = function (namaPenumpang, penumpang) {
  if (namaPenumpang == penumpang.length) {
    console.log("angkot sedang kosong");
    return penumpang;
  } else {
    for( i = 0; i < penumpang.length; i++ ) {
      if( penumpang[i] == namaPenumpang ) {
        return penumpang[i] = undefined;
      } else if( i == penumpang.length -1 ) {
        console.log(namaPenumpang + ' tidak ada di dalam angkot')
      }
    }
  }
};

//  versi saya
let bangku = penumpang;
// let hapusPenumpang = function(namaPenumpang, bangku) {
//   if( bangku.length === 0 ) {
//     console.log('Angkot kosong ' + namaPenumpang + ' sudah turun')
//     return bangku;
//   } else {
//     let ketemu = false;
//     for( i = 0; i < bangku.length; i++ ) {
//       if( namaPenumpang === bangku[i] ) {
//         bangku[i] = undefined;
//         ketemu = true;
//         break
//       }
//     }
//     if( !ketemu ) {
//       console.log(namaPenumpang + ' tidak ada');
//     }
//   }
// }

tambahPenumpang("zuroq", penumpang);
tambahPenumpang("suhail", penumpang);
tambahPenumpang("qorny", penumpang);
console.log(penumpang);

hapusPenumpang("zuroq", bangku);
hapusPenumpang("zuroq", bangku);
console.log(bangku);
