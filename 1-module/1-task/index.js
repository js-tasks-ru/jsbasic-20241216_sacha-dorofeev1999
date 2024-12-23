function factorial(n) {
  let b = 1;


  for ( i = 0; i < n; i++) {
    b *= i + 1;
  }
  return b;
}
