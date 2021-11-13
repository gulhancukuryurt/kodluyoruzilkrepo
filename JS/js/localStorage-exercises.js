let counter = localStorage.getItem('counter') ? Number( localStorage.getItem('counter') ): 0
let counterDOM = document.querySelector("#counter")
let arttir = document.querySelector("#arttır")
let azalt = document.querySelector("#azalt")


counterDOM.innerHTML = counter

arttir.addEventListener("click", clickEvent)
azalt.addEventListener("click", clickEvent)

function clickEvent(){
    console.log(typeof(counter))
    if(this.id == "arttır"){
        counterDOM.innerHTML = counter+=1
    }

    else if (this.id == "azalt"){
        counterDOM.innerHTML = counter -=1
    }

    localStorage.setItem('counter', counter)

}