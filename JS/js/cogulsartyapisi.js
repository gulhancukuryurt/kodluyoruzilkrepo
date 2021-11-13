let username = prompt("Adınızı giriniz:")
let age = prompt("Yaşınız:")

if(username && age >= 18){
    alert(`Merhaba ${username} ehliyet alabilirsin`)
}
else if(!username ){
    alert("Kullanıcı adınız eksik")
}
else {
    alert("Ehliyet alamazsınız")
}