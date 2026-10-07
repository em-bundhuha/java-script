// Tanpa array
let namaMhs = "Ubay abdurrahman";
let umurMhs = "20";
let lulus = true;
let ipSemester = [2.9, 3.1, 3.25, 2.88, 3.04];

// <---------------------------->
// Dengan Array
let mahasiswa = 
['Ubay abdurrahman',20, true, [2.9, 3.1, 3.25, 2.88, 3.04]];

// <------------------------------->
function IPKumulatif(ipSemester) {
  let total = 0;
  for (i = 0; i < ipSemester.length; i++) {
    total += ipSemester[i];
  }
  return total / ipSemester.length;
}


// Tanpa array
console.log("Nama:", namaMhs);
console.log("Umur:", umurMhs);
console.log("Lulus:", lulus);
console.log("IP per semester:", ipSemester);
console.log("IPK:", IPKumulatif(ipSemester));

// Dengan array

console.log('Nama:', mahasiswa[0])
console.log('Umur:', mahasiswa[1])
console.log('Lulus:', mahasiswa[2])
console.log("IP per semester:", mahasiswa[3]);
console.log("IPK:", IPKumulatif(mahasiswa[3]));

//  Dengan Object
console.log('contoh hasil dari penggunaan object');
let objctMahasiswa = {
  nama : 'Ubay Abdurrahman',
  lulus : true,
  ipSemester : [2.9, 3.1, 3.25, 2.88, 3.04],
  IPKumulatif : function() {
    let total= 0;
    let ips = this.ipSemester;
    for( let i = 0; i < ips.length; i++) {
      total += ips[i];
    }
    return total/ips.length;
  }
}

console.log(objctMahasiswa.IPKumulatif())