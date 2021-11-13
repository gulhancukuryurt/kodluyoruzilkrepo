let user = {username: "gulhancukuryurt", isActive: true}
console.log(user)

localStorage.setItem('userInfo', JSON.stringify(user))

let userInfo = localStorage.getItem('userInfo') //bilgi al 
userInfo = JSON.parse(userInfo) //içerisindeki bilgilere tek tek ulaşabiliriz 
console.log(userInfo)



