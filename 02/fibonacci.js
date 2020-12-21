function fibonacci(n) {
  let f = [0, 1]

  // next = prev + one before prev
  for (i = 2; i <= n+1; i++) {
    f[i] = f[i - 1] + f[i - 2];

    console.log(f)
  }

  return f.join(" ");
}

module.exports = fibonacci