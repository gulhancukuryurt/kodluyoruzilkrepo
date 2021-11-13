let username = "Gulhan"
let domain = "kodluyoruz.org"

let email = username + "@" + domain 
console.log("Merhaba" , username , "Siteye Hoşgeldin", "Mail adresin: ", email)

let info = `Merhaba ${username} sitemize hoşgeldin. 
Mail adresin: ${email} 
Mail adresinin uzunluğu: ${email.length}
Borcunuz ${(2+5)*10} TL
Günün saat bilgisi ${new Date().getHours()}
İsminizin Baş Harfi : ${username[0]}`
console.log(info)