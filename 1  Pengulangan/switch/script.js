// contoh sytax dasar

// var nilai_awal = parseInt(prompt('masukkan anka dari 1 - 3:'))
// switch (nilai_awal) {
//   case 1 :
//     alert('anda memasukkan angka 1');
//     break;
//   case 2 :
//     alert('anda memasukkan angka 2')
//     break
//   case 3 :
//     alert('anda memasukkan angka 3')
//     break;
//   default :
//     alert('angka yang anda masukkan salah')
//     break;
// }


// contoh pengunaan untuk program makanan

var item = prompt('masukkan nama makanan / minuman : \n (cth: nasi, daging, susu, hamburger, softdrink)');

switch(item) {
  case 'nasi' :
    alert('makanan / minuman SEHAT!');
    break;
  case 'daging' :
    break;
    alert('makanan / minuman SEHAT!');
  case 'susu' :
    alert('makanan / minuman SEHAT!');
    break;
  case 'hamburger' :
    alert('makanan / minuman  TIDAK SEHAT!');
    break;
  case 'softdrink' :
    alert('makanan / minuman TIDAK SEHAT')
    break;
  default :
    alert('anda memasukkan makanan / minuman yang di luar pilihan!');
    break;
}