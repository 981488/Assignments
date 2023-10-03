/* Number Eight: Write addition, subtraction, multiplication, and division operations
that each result in the number 8. Be sure to enclose your operations in print 
statements to see the results.*/
// Addition
let sum = (x:number, y:number):number => {
    return x + y;
};
const sum1:number =sum(4,4)
console.log("Addition Result", sum1)
//Subtraction
let subtraction = (x: number, y: number): number => {
    return x - y;
};
const subtraction2: number = subtraction(16, 8)
console.log("Subtration Result", subtraction2)
//Multiplication
let multiplication=(x: number, y: number): number => {
    return x * y;
};
const multiplication1: number = multiplication(4, 2)
console.log("Multiplication Result", multiplication1)
// Division
let devision = (x: number, y: number): number => {
    return x / y;
};
let division1: number = devision(16, 2)
console.log("Division Result", division1)