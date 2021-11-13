let form = document.querySelector('#userForm')

form.addEventListener("submit", formSubmit)

function formSubmit(event){
    event.defaultPrevented() //default işlemi gerçekleşti 
    console.log("İşlem gerçekleşti")
    let scoreInput = document.querySelector('#score')
    console.log(scoreInput.value)
    localStorage.setItem('score', scoreInput.value)
}