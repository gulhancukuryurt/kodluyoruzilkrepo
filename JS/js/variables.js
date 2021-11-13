var serverName = "Kodluyoruz.org" //değişken tanımlama 
console.log(serverName)

let sitesName; 
console.log(sitesName) // undefined 

sitesName = "https://kodluyoruz.org"  // içine bilgi eklemek 
console.log(sitesName)

let password = "1234";
console.log(password)

console.log(fullName)  //hatalı kullanım 
fullName="Gulhan"

console.log(fullName + " Çukuryurt") //birleştirme

fullName += "Çukuryurt"  //ekle ve eşitle

const serverPassword="şifremm"  //const ile tanımlanınca içerisinde sonradan bilgi eklenmez 
console.log(serverPassword)

serverPassword += "12345"  
console.log(serverPassword)