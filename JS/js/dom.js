console.log(document.URL) // URL bilgisi alma 

console.log(document.location) // Location gösterir 

console.log(document.location.pathname)

console.log(document.body)

document.body.style.backgroundColor = "aqua"

/*let file = document.getElementsByTagName('h2')
console.log(file) */

let file = document.getElementById('title')
console.log(file.innerHTML)

file = file.innerHTML = "Değişen Bilgi"
console.log(file)

let link = document.querySelector("ul>li>a")
console.log(link.innerHTML) //içindeki bilgi 

link= link.innerHTML = "Link Bilgisi Değişti"
console.log(link)




