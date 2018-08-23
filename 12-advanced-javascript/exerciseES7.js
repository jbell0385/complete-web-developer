// Solve the below problems:


// #1) Check if this array includes the name "John".
let dragons2 = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
console.log(dragons2.includes("John"));

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
let dragons3 = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
let john = dragons3.filter(name=>name.includes('John'));
console.log(john);

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
var power = 2;
function powerOf2(exp){
  return 100**exp;
}

console.log(powerOf2(power));

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
console.log(powerOf2(10000))
