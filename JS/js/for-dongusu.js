let colors = ["red", "green", "blue"]

for (let index=0 ; index <10; index++){
    console.log(index)
}

const colorsDOM = document.querySelector('#colorList')

for(index = 0 ; index < colors.length; index++){
    const liDOM = document.createElement('li')
    liDOM.innerHTML = colors[index]
    colorsDOM.appendChild(liDOM)
} 