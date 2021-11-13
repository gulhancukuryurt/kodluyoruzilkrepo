let item = document.querySelector("ul#list>li:last-child")
item.innerHTML = "Değiştirildi"
console.log(item)

let item1 = document.querySelector("ul#list>li:first-child")
item1.innerHTML = "Değiştirildi1"
console.log(item)

let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement('li')

liDOM.innerHTML = "Yeni oluşturduğumuz öğe"
ulDOM.append(liDOM) //en sona ekler 
ulDOM.prepend(liDOM) //ilk öğe ekler





