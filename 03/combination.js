const factorial = n => {
  if (n === 0 || n === 1) return 1

  return n * factorial(n - 1)
}

function combination(n, r) {
  return (
     factorial(n) / (factorial(r) * factorial(n - r))
  )
}

module.exports = combination