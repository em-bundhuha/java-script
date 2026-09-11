// //  Manipulasi Array

// //  1. Menambah kan isi array
// var arr = ['a', 1, true];
// console.log(arr + '\n' + arr.length);

// //  2. Menambahkab  isi array
// var arr = ['abdurrahman', 'murtadho', 'subhan', 'zuber',  'zaid'];

// for(i = 0; i < 5; i ++) {
//     console.log('anggota dark sistem ke-' + (i+1) +' ' + arr[i]);
// }

// //  jika jumlah arraay tidak jelas

// console.log(" \n ini dengan jumlah array anonim");
// for(i = 0; i < arr.length; i ++) {
//     console.log('anggota dark sistem ke-' + (i+1) +' ' + arr[i]);
// }


//  Method pada array
var arr = ['Nova', 'gusian', 'faramis'];
// 1.  join
// console.log(arr.join("⁆⁅"));

//  Push & Pop
//  2 push
// arr.push('Dolby');
//  3, Pop
// arr.pop();

//  4, splice
//  splice(indexAwal, mauHapusBerapa, elemenBaru1, elemenBaru2, ....)
// arr.splice(2, 0, 'Dolby', 'julian')

//  5. slice
//  slice(awal, akhir)
//  yang Pertama terbawa akhir tidak contoh mau dari 1-2 maka slice(1,3)
var arr =['Nova', 'ama', 'Dolby', 'Julian', 'Faramis']
var arr2 = arr.slice(1, 3);
console.log('ini bukan termasuk Hero')
console.log(arr2.join(' - '));

