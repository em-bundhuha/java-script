//  ini cara kerja di balik layar factorial

function faktorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * faktorial(n - 1);
}

faktorial(5);
