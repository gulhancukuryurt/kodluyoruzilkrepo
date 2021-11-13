let items = [1,2,3,4]

let femaleUsers = ["Ayşe", "Fatma", "Hayriye"]
let maleUsers = ["Berkay", "Oğuzhan", "Hakan"]

items.unshift(femaleUsers)
items.push(maleUsers)
console.log(items)

console.log(items[0])
console.log(items.length)
console.log(items[0][0]) 
console.log(items[0].length)

let newItems = items.splice(1,5)
console.log("New Items: ", newItems)

items.unshift("gülhan")
items.push("çukuryurt")
console.log(items)
console.log(items.indexOf("gülhan"))

copyItems = items.slice()
console.log(copyItems)

let es6 = [...copyItems, ...items]
console.log(es6)

let allUsers = [...femaleUsers, ...maleUsers]
console.log(allUsers)

console.log(allUsers.toString())
console.log(allUsers.join(" --- "))

allUsers.splice(allUsers.length-1, 0, "Gülhan")
allUsers.splice(Math.floor(allUsers.length / 2), 0, "Merve")
console.log(allUsers)