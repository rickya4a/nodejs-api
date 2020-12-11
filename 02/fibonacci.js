function fibonacci(numMax){
  let fibArray = [0, 1]

  for (let i = 0, j = 1, k = 0; k < numMax; i = j, j = x, k++ ) {
    x = i + j;
    fibArray.push(x);
  }

  return fibArray.join(" ");
}

module.exports = fibonacci