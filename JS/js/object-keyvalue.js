let laptop = {
    brand: "Apple", 
    modal: "MacBook Pro",
    "2kg" : 2, //sayı ile başlamaz sayı yazmak istersek tırnak içine alabiliriz 
    model_name: "MacBook Air"



} //object olduğunu belirttik

console.log(laptop, laptop["modal"])
console.log(laptop.brand, laptop["brand"])
console.log(laptop["2kg"])

//Varolan anahtara Yeni değer eklemek 
laptop.modal = "MacBook Pro Yeni Değer"
laptop["model_name"] = "Yeni eklediğim değer"
console.log(laptop)

//Yeni değer eklemek 
laptop.version = "18.15.7"
console.log(laptop)

//Anahtar bilgisine ulaşmak 
keys = Object.keys(laptop)
console.log(keys)
console.log(Object.keys(laptop))

keys.forEach(keyInfo => {
    console.log(keyInfo)
    console.log(laptop[keyInfo])
});

//Değer Bilgilerine ulaşmak
console.log(Object.values(laptop))

let values = Object.values(laptop)
values.forEach(value => {
    console.log("Value:", value)
})