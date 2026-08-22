// Tugas pertama

// let s = "";
// for (var i = 0; i <= 10; i++) {
//   for (var a = 0; a <= 5; a++) {
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s);

// Ide saya dari AI

// let hasil = [];

// for (let i = 1; i <= 10; i++) {
//   let s = "";
//   for (let a = 0; a < 5; a++) {
//     s += "*";
//   }
//   hasil.push(i + " " + s);
// }

// console.log(hasil.join("\n"));

let b = "";

for (var u = 1; u <= 10; u++) {
  for (var j = 1; j <= u; j++) {
    b += "+";
  }
  b += "\n";
}
console.log(b);


// kalau misalkan terbalik

// let b = "";

for (var u = 10; u >= 1; u--) {
  for (var j = 1; j <= u; j++) {
    b += "+";
  }
  b += "\n";
}
console.log(b);
