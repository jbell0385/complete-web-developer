function binarySwap(input) {
  // Happy Coding :D

  function swap(num) {
    if (parseInt(num) === 0) {
      return 1;
    }
    if (parseInt(num) === 1) {
      return 0;
    }
  }

  if (typeof (input) === 'number') {
    return swap(input);
  } if (typeof (input) === 'object' && input.length !== 'undefined') {
    const newArr = input.map(num => swap(num));
    return newArr;
  } if (typeof (input) === 'function') {
    return binarySwap(input);
  }
}

console.log(binarySwap([1,[0,1]));
