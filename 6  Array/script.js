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
//  yang Pertama terbawa dan yang akhir tidak, contoh mau dari 1-2 maka slice(1,3)
// var arr =['Nova', 'ama', 'Dolby', 'Julian', 'Faramis']
// var arr2 = arr.slice(1, 3);
// console.log('ini bukan termasuk Hero')
// console.log(arr2.join(' - '));

//  6. forEach
// var angka = [1,2,3,4,5,6,7,8,9];
// for( i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// }
// angka.forEach(function(e) {
//     console.log(e);
// });


var nama = ['Alan', 'ziham', 'danur','marsha','oline','kimmy']
nama.forEach(function(e, i) {
    console.log('Mahasiswa ke-' + (i+1) + ' adalah : ' + e)
})
//  Nyoba membuat daftar isi
console.log('')
var cetak = function(e, i) {
    if (i === 0) {
        console.log('No\tNama');
    }
    else {
        console.log(i + '\t' + e);
    }
}
nama.forEach(cetak);
