function findMax(arr) {
  const max = arr.reduce((accumlateor, current) => {
    return accumlateor > current ? accumlateor : current;
  });
  return max;
}

console.log(findMax([10, 5, 20, 8, 25]));


