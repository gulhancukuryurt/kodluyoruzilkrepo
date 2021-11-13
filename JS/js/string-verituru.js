let email = "gcukuryurt@gmail.com"
let firstname = "Gulhan"
let surname = "CUKURYURT"

console.log(`Mail uzunluğu ${email.length}`) //uzunluk 

console.log(`İsmin baş harfi ${firstname[0]}`)  // karakter bulmak 
console.log(firstname.charAt(0))

firstname = firstname.toUpperCase() //büyük harfe çevir 
console.log(firstname)

surname = surname.toLowerCase() //küçük harfe çevir 
console.log(surname)

console.log(email.search("@"))
console.log(email[10])
console.log(email.search("olmayan")) // olmayan karakterleri -1 olarak getirir

let DOMAIN = email.slice(email.search("@") +1) //belli bir yere kadar al 
console.log(DOMAIN)
console.log(DOMAIN.slice(0, DOMAIN.indexOf("."))) //sadece gmail kısmını aldım 

email = email.replace("gmail.com", "kodluyoruz.org") //değiştir 
console.log(email)

email = email.includes('pp') //içinde var mı yok mu? 
console.log(email)


// console.log(email.endsWith("kodluyoruz.org")); //sonu böyle mi bitti?? 

firstname = "FİRST"
username = "LASTNAME"

let fullname = `${firstname[0].toUpperCase()}${firstname.slice(1).toLowerCase()} ${username[0].toUpperCase()}${username.slice(1).toLowerCase()}`

console.log(fullname)