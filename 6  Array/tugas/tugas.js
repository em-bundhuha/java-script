let penumpang = ['suhail', undefined, 'quriosh'];
let tambahPenumpang = function (namaPenumpang, Penumpang) {
  // console.log("menambahkan penumpang " + namaPenumpang + "  " + Penumpang);
  if (penumpang.length == 0) {
    penumpang.push(namaPenumpang);
    return penumpang;
  } else {
    for (i = 0; i < penumpang.length; i++) {
      if( penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;
      } else if (penumpang[i] == namaPenumpang) {
        console.log(" si " + namaPenumpang + " sudah ada");
        return penumpang;
      } else if ( i == penumpang.length - 1 ) {
        penumpang.push(namaPenumpang);
        return penumpang;
      }
    }
  }
};

tambahPenumpang("abdur", 2);
tambahPenumpang("zuraq", 1);
tambahPenumpang("zuraq", 6);
tambahPenumpang("handoyo", 3);

console.log(penumpang);
