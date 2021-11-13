let user1 = {
    firstName: "Bilgin",
    lastName:  "Uzman",
    score:  [1,2,3,4],
    isActive: true,
    shortName: function() {return(`${this.firstName[0].toUpperCase()}. , ${this.lastName}`)}
};

console.log(user1)


function yaz(){console.log("Merhaba Kodluyoruz")}

let person={name:"Selin",city:"Ankara",favoriteColor:"aqua blue"}; 
let {name:foo}=person;
console.log(foo)

let [,pronoun,,name]=["Merhaba","benim","adım","Mehmet"];
console.log(pronoun)
console.log(name)