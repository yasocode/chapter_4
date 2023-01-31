//function declaration

// function greet(){
//     console.log("Hello There!")
// }

// greet();

//function expression

// const speak = function(){
//     console.log("Hello There!")
// };

// speak();

//arguments & parameters

// const speak = function(name, time){
//     console.log(`Good ${time} ${name}!`)
// };

// speak("Yasoli", "night");

//returning values

// const calcArea = function(radius){
//     let area = 3.14 * radius**2;
//     return area;
// }

// const area = calcArea(5);
// console.log(area);

//arrow & regular functions
//regular

// const calcArea = function(radius){
//     return 3.14 * radius**2;
// };

//arrow

// const calcArea = (radius) => {
//     return 3.14 * radius**2;
// };

// const result = calcArea(5);
// console.log(result);

// const bill = function(products, tax){
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i]*tax;
//     }
//     return total;
// }

// const bill = (products, tax) => {
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i]*tax;
//     }
//     return total;
// }

// console.log(bill([10,15,20], 0.3));

//functions & methods

const name = "Yasoli"

const greet = () => "Hello!";

let resultOne = greet();
console.log(resultOne);

let resultTwo = name.toUpperCase();
console.log(greet(), resultTwo);