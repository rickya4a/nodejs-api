const factorial = n => {
  return (n <= 0 ? 1 : (n * factorial(n - 1)))
}

function combination(n, r) {
  return (
     factorial(n) / (factorial(r) * factorial(n - r))
  )
}

function pyramid(param) {
  let pattern = "";

  for (let i = 1; i <= param; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += "*"
    }

    pattern += '\n'
  }
  console.log(pattern);
}

pyramid(5)

module.exports = combination