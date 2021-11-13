let price = 111
let stringPrice = "111"
let hasPassword = true

console.log(typeof(price))
console.log(typeof(stringPrice))
console.log(typeof(hasPassword))

let number = "11px"
number = parseInt(number)
console.log("Number:", number, typeof(number))

let number1 = "11"
number1 = parseInt(number1)
console.log("Number:", typeof(number1), parseInt(number1), typeof(number1))

let number2 = "11px"
number2 = Number(number2)  //Number türünde içinde sadece sayı olmalı 
console.log("Number:", number2, typeof(number2))

let number3 = "11.4px"
number3 = parseFloat(number3) 
console.log("Number:", number3, typeof(number3))

let number4 = 55
number4 = number4.toString() 
console.log(number4, typeof(number4))