let username = prompt("Kullanıcı bilginizi giriniz")

let title = document.querySelector("#title")

title.innerHTML = `${username.length > 0 ? username : "kullanıcı bulunamadı"}`

let boolean;

const isBooleanTrue = boolean ? true : false;

console.log(isBooleanTrue)

console.log(boolean) 

let age = 24;
let permission = (age >= 18) ? "Giriş yapabilirsiniz." : "Giriş yapamazsınız.";

console.log(permission); 

let firstCity = "Ankara";

let secondCity = "İstanbul";
   
const isEqual = (firstCity === secondCity) ? "İki şehir aynı" : "İki şehir aynı değil";

console.log(isEqual) 

       
var money;
       
var canBuy = 
           
(money < 17) ? "Satın alamazsın..":
           
(money > 30) ? "Satın alabilirsin..":
          
"Para miktarını girmen gerekmektedir..";
   
console.log(canBuy)       
    