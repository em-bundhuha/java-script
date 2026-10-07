// membuat object Angkot
function Angkot(sopir, jalur, penumpang, kas) {
  this.sopir = sopir;
  this.jalur = jalur.join(" -- ");
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    if (this.penumpang.length === 0) { 
      this.penumpang.push(namaPenumpang);
      return this.penumpang;
    } else {
      let full = 1;
      let gglNaik = [];
      for (i = 0; i < this.penumpang.length; i++) {
        if (this.penumpang[i] == undefined) { // kalo ada kosong atau ada yang udah turun
          this.penumpang[i] = namaPenumpang;
          return this.penumpang;
        } else if (this.penumpang[i] == namaPenumpang) { // kllo udah naik
          console.log(" si " + namaPenumpang + " sudah ada");
          return this.penumpang;
        } else if (this.penumpang.length >= 4) { // limit kursi
          full += 1;
          gglNaik.push(namaPenumpang);
          break; // supaya tetap lanjut iterasi tapi klo terpenuhi yang di bawah nya gugur
        } else if (i == this.penumpang.length - 1) { // pengisian jika kosong
          this.penumpang.push(namaPenumpang);
          return this.penumpang;
        }
      }
      if ( full >= 1 ) {
        total = gglNaik;
        console.log('Angkot sudah penuh ' + gglNaik + ' tidak bisa naik')
      }
    }
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      console.log("angkot masih kosogn!");
      return false;
    }
    for (let i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] === namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return this.penumpang;
      } else if (namaPenumpang !== this.penumpang[i]) {
        console.log(namaPenumpang + " tidak ada di dalam mobil");
        return this.penumpang;
      }
    }
  };
}

let angkot1 = new Angkot("syahid", ["desa kemiri", "magelang"], [], 0);
let angkot2 = new Angkot("Abdur", ["pangkep", "segeri"], [], 0);

// angkot1.penumpangNaik(["oline", "nina", 'nala', 'naila', 'regi', 'terisha', 'delyn', 'lily', 'ribka']);
angkot1.penumpangNaik("oline");
angkot1.penumpangNaik("nala");
angkot1.penumpangNaik("ribka");
angkot1.penumpangNaik("arlie");
angkot1.penumpangNaik("oline");
console.log(angkot1.penumpang);
angkot1.penumpangTurun("ayyub", 2000);
angkot1.penumpangTurun("oline", 2000);
angkot1.penumpangNaik("thrisha");
angkot1.penumpangNaik("marsha");
console.log(angkot1.penumpang, angkot1.kas);
