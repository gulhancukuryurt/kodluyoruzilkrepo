const alertDom = document.querySelector('#alert')

const alertFunction = (title ,message, className = "warning") =>
`<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title} </strong> ${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`

let userForm = document.querySelector('#userForm')
userForm.addEventListener('submit', formHandler)

function formHandler(event){
    event.preventDefault()
    const username = document.querySelector('#username')
    const score = document.querySelector('#score')
    score.value >100 ? alertDom.innerHTML = alertFunction(`Tekrar Dene!`, "Sınav notu 0-100 arasında olmalı", "danger") : console.log("Doğru giriş")
    if(username.value && score.value){
    addItem(username.value, score.value) 
    username.value =""
    score.value = ""
}

    else {
        alertDom.innerHTML = alertFunction("Bilgiler Eksik!" , "Hatalı Giriş", "danger")
    }
}

const userList = document.querySelector('#userList')

const addItem = (userName, score) =>{
     let liDOM = document.createElement('li')
     liDOM.innerHTML = `${userName} 
     <span class="badge bg-primary rounded-pill">${score}</span>
     `
     liDOM.classList.add(
        'list-group-item','d-flex','justify-content-between','align-items-center'
     )
     userList.append(liDOM)
}

