function NamaTongkrongan (a, b) {
  var total;
  total = a + ' dan ' + b;

  return total;
}

var nama1 = prompt('masukkan nama\nPertama')
var nama2 = prompt('kedua')
var nama3 = prompt('ketiga')
var nama4 = prompt('keempat')
var nama5 = prompt('kelima')
var nama6 = prompt('keenam')
var nama7 = prompt('ketujuh')
var nama8 = prompt('kedelapan')
alert('di tonkrrongan ada ' + NamaTongkrongan(nama1, nama2));
alert('di samping kanan ada ' + NamaTongkrongan(nama3, nama4));
alert('di depan ' + NamaTongkrongan(nama5, nama6));
alert('di samping kiri ada ' + NamaTongkrongan(nama7, nama8));
