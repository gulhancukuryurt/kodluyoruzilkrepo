const fruitList = ["apple", "banana","strawberry", "cherry","orange"]

// break işlemi durdur
//continue atla ve devam et

let counter = 0; 
for (; counter <10; counter++){
    if(counter === 5){
        break
    }
    console.log(counter) //4'e kadar çalışır
}


for (; counter <10; counter++){
    if(counter === 5){
        continue
    }
    console.log(counter) // 5 hariç diğer sayıları yazar
}

const listDOM = document.querySelector('#colorList')
let index= 0

for (; index < fruitList.length; index++){
    if(fruitList[index] == "banana"){
        // break  apple yazdı sadece
        continue // banana hariç hepsini yazdı
    } 
    let liDOM = document.createElement('li')
    liDOM.innerHTML = fruitList[index]
    listDOM.append(liDOM)
}