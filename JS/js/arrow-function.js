function hello (firstName){
    console.log(`Merhaba ${firstName}`)
}

hello("Gülhan")

const hello1 = firstName => console.log(`Merhaba ${firstName}`) //fat arrow 
hello1("Gülhan1")

const hello2 = (firstName, lastName) => console.log(`Merhaba ${firstName} ${lastName}`)
hello2("Gülhan" , "Çukuryurt")

const hello3 = (firstName, lastName, password) => {
    let info = `Merhaba ${firstName} ${lastName} Şifreniz: ${password}`
    console.log(info)
    return info
}

hello3("Gülhan ", "Çukuryurt", "1234")
