let settings = {
    firstName: "Lorem",
    lastName: "İpsum",
    ip: 123445, 
    isActive: true,
    serverName: "kodluyoruz.org"

}

let {firstName: user1, lastName, ip: server, isActive, serverName} = settings
console.log(user1,lastName, server, isActive, serverName)
console.log(settings)

let {firstName: renameYapalim, lastName, isActive, ...newItem} = settings //kalanı newItem'a attık 
console.log(settings)


let settings2 = {...settings}
settings2.user1 = "Değişen Bilgi"
console.log(settings)
console.log(settings2)

let score = [100,200,300,400]
let [score1, score2, ...otherScore] = score
console.log(score1,score2,otherScore)

let copyOfScore = {...score}
console.log(copyOfScore)