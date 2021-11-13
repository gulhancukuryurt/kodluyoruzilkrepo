let domain = "kodluyoruz"
let isActive= false
let items = [1, 2, 3, 4, isActive, domain]
console.log(items)

let emptyArray = []

console.log(items.length) // kaç değer var? 

let title = document.querySelector('#title')
title.innerHTML = items.length

console.log (items[0])
console.log(items [items.length-1]) //son değeri yazdır 

console.log ( Array.isArray(items))