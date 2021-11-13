const product = ["Laptop", "Mouse", "Keyboard", "Server"]

const newProduct = product.filter (item => item.length > 6 )
console.log(newProduct)

const user = [
    {fullName: "Ayşe Yılmaz", isActive: true},
    {fullName: "Gülhan Çukuryurt", isActive: true},
    {fullName: "Gülşah Çukuryurt", isActive: false},
    {fullName: "Selim Aşkım", isActive: false}
]

const activeUser = user.filter(liste => liste.isActive) //default olarak hep true bakarız 
console.log(activeUser)