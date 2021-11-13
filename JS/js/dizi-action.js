let items = [10,20,30,40,]
console.log("items - ilk hali: ", items)

items.push(50)
console.log("Ekleme yaptık", items)

items.unshift(0)
console.log("En başa öğe ekledik", items)

let lastItem = items.pop() // çıkarılan son elemanı lastItem içine ekledik
console.log(lastItem,items)

let firstItem = items.shift() // çıkarılan ilk elemanı lastItem içine ekledik
console.log(firstItem,items)

items[0] = 5
console.log(items) // ilk eleman değerini değiştirmek

items[items.length-1] = 1000
console.log(items)