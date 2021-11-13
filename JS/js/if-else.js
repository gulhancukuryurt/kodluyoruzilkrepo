
/* let username = prompt("Adınızı giriniz: ")

if(username.length >0){

 console.log ("Hoşgeldin " +username)
}

else  {
    alert("Hatalı Giriş")
} */

var random = Math.floor(Math.random()*10)

var number = prompt("Sayı tahmin edebilirsin")

if(number == random){
    alert("Doğru Bildin " +random)
}

else if(number == ""){
     alert("Yanlış Giriş")
}

else if (number == null){
    alert ("Giriş yanlış")
}

else {
    alert("Tekrar Dene! Sayı " + random)
}