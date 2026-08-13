// tugas ke dua

var jumlahBotol = 20;
var botolLaku = 7;
var belumLaku = jumlahBotol - botolLaku;
var mulaiLaku = belumLaku + 1;
var no_botol = 1;

while (no_botol <= belumLaku) {
  console.log("botol no " + no_botol + " blum laku");
  no_botol++;
}

// for( no_botol)
for (no_botol = mulaiLaku; no_botol <= jumlahBotol; no_botol++) {
  console.log("botol no " + no_botol + " udah laku");
}
