function pyramid(n, baris = 1) {
  if (baris > n) {
    return;
  }

  const spasi = " ".repeat(n - baris);
  const icon = "*".repeat(2 * baris - 1);
  console.log(spasi + icon);

  pyramid(n, baris + 1);
}

function pyramidTerbalik(n, baris = 1) {
  if (baris > n) {
    return;
  }

  const spasi = " ".repeat(baris );
  const icon = "*".repeat(2 * n - (2 * baris - 1));
  console.log(spasi + icon);

  pyramidTerbalik(n, baris + 1);
}

pyramid(5);
pyramidTerbalik(4);


//  untuk mendapatak ketupat yang presisi jadi yang bawah hnaya 4 baris dan suapaya di tengah spasi nya gak di kurang 1 jadi di baris 1 sudah ada 1 spasi