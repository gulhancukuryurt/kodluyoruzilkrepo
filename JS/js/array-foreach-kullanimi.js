const product = ["Laptop", "Mouse", "Keyboard", "Server"]

//product.forEach((product, index, array) => console.log(product, index, array))

product.forEach((product, index, array) => array[index] = `${product.toUpperCase()}`)
console.log(product)

let productList = document.querySelector("#colorList")

product.forEach(items => {
    const liDom = document.createElement('li')
    liDom.innerHTML = items
    productList.append(liDom)
})

//forEach Arrayler ile kullanılır 