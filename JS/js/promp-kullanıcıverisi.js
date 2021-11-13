let fullName = prompt("Adınızı giriniz")
console.log(`Hoşgeldin ${fullName}`)

let title = document.querySelector("#title")
 
title.innerHTML = `${title.innerHTML} <small style = "color:red"> ${fullName} </small>` 