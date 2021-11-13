let firstName = "Kodluyoruz"

function title(firstName=""){
    console.log(`Merhaba ${firstName}`)
}

title("Gülhan")

function great(name, surname){
   let message= (`Merhaba ${name} ${surname}`)
   console.log(message)
   return message
}

function domIdView (id, name){
    let degisen= document.querySelector(`#${id}`)
    degisen.innerHTML = name
}
let htmlInfo = `<span style= "color:red"> COLOR RED </span> `
great("Gülhan", "Çukuryurt")
domIdView('title', htmlInfo)

function Question(hobby) {
    switch (hobby) {
      case "car":
        return function (name) {
          console.log(name + " do you have a car ?");
        };
        break;
  
      case "book":
        return function (name) {
          console.log(name + " what is your favorite author?");
        };
        break;
  
      case "software":
        return function (name, type) {
          console.log(name + " are you interested in " + type + "?");
        };
        break;
  
      default:
        return function (name) {
          console.log(name + "  how are you ?");
        };
        break;
    }
  }
  
  var softwareQuestion = Question("software");
  softwareQuestion("Cemre","nodejs");