// konsep this
// console.log(this);

// cara 1 - functon declaration
// function halo() {
//   console.log(this);
//   console.log('halo');
// }
// this.halo();
// this mengembalikan object global

// cara 2 - object literal
// let obj = {nama: 'luezarq', wr: 45, matc: 700};
// obj.halo = function() {
//   console.log(this);
//   console.log('halo');
// }
// obj.halo();
// mengembalikan object yang bersangkutan

// cara 3 - constructor

function Halo() {
  console.log(this);
  console.log('halo');
}
new Halo();
// this nya mengembalikan nilai yang baru di buat