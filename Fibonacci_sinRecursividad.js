function fibonacci(num) {
  const fib = [0, 1];

  for (let i = 2; i <= num; i++) {
    let element = fib[i - 1] + fib[i - 2];
    fib.push(element);
  }

  return fib;
}

fibonacci(10);
