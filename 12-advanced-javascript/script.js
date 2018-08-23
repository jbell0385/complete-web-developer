const theArray = [1, 2, 3, 4, 5, 6, 7];

function answer(arr, target) {
  let answerCombo = [];
  arr.forEach(num1 => {
    arr.forEach(num2 => {
      if (num1 + num2 === target) {
        answerCombo = [num1, num2];
        return
      }
    })
  })
  return answerCombo
}

console.log(answer(theArray, 9));