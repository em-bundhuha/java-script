function hitungNama(n) {
  console.log(n);
  return hitungNama(n-1);
}

hitungNama(10);