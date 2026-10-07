// Object literal
let heroFav = {
  nama : 'Fanyy',
  wr : 40,
  match : 700,
  play_stayle : 'sustain frestayle'
}
// jika lebih dari 1 hero favorit
let heroFav2 = {
  nama : 'julian',
  wr : 45,
  match : 400,
  play_stayle : 'sustain burst sekil 1'
}

// function declaration
function membuatHeroFavorit(nama, wr, play_stayle) {
  let heroFavo = {};
  heroFavo.nama = nama;
  heroFavo.wr = wr;
  heroFavo.play_stayle = play_stayle;
  return heroFavo;
}

let heroFav3 = membuatHeroFavorit('benedetta', 54, 'sustain push & flank')

// constructor function (keywoard new)
function HeroFavorit(nama, wr, play_stayle) {
  this.nama = nama;
  this.wr = wr;
  this.play_stayle = play_stayle
}

let heroFav4 = new HeroFavorit('Gusion', 40, 'Belum nemu');


console.log(heroFav);
console.log(heroFav2);
console.log(heroFav3);
console.log(heroFav4);
// console.log(heroFav);
// console.log(heroFav); 