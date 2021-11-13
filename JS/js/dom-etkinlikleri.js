let title = document.querySelector("#title")
title.addEventListener("mouseover", domClick)

/* title.addEventListener("click", function(){
     console.log("tıklandı")
}) */

function domClick (){
    console.log("tıklandı")
    //console.log(title.style.color="red")
    title.style.color == "red" ? title.style.color = "black" : title.style.color= "red"
    
    
}


