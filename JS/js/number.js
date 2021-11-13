let price = 100   //number veri türü tanımlamak 
let tax = 0.18
let priceTax = price * tax
let total = price + priceTax
console.log(
    "Fiyat: " ,  price, 
    "KDV Oranı:" , tax, 
    "KDV Tutarı", priceTax, 
    "Fiyat:" , total
    )

let stringNumber = "111"
console.log(stringNumber)
let number = Number(stringNumber)
console.log(number)
console.log("Number const içine bilgi gönderildi" , Number("111"))



let counter = 320
counter = counter +1 
console.log(counter)

counter ++
console.log(counter)

counter --
console.log(counter)

counter *= 10
console.log(counter)

counter /=2
console.log(counter)

console.log(2+3*2) //işlem önceliği 
console.log((2+3)*2)

console.log(15 % 2) //mod alma işlemi 
console.log("Koli Örnegi:" , "Kalan Ürün:" ,18 % 8)

console.log(2**3) //üst alma 

console.log( Math.floor(1.8)) // aşağı yuvarlama 

console.log( Math.ceil(1.9))  //yukarı yuvarlama

console.log( Math.round(2.8)) //yakına yuvarlama




