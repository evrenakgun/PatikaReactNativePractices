// ********** let ve const ile Degisken Tanimlama **********

// var ile degisken tanimlamak:
//var serverName = "api.kodluyoruz.org"
//console.log(serverName)

// let ile degiskeni bos tanimlamak:
let serverName;
console.log(serverName)

// let ile degiskene bilgi atamak:
serverName = "https://kodluyoruz.org"
console.log(serverName)

// let ile degiskene bilgi atayarak tanimlamak:
let password = "1234";
console.log(password)

// degisken atamasi yapmadan once kullanmaya calismak:
/* HATALI KULLANIM
console.log(fullName)
let fullName = "Hakan Yalcinkaya";
*/
let fullName = "Hakan Yalcinkaya";
console.log(fullName)

// let ile tanimlanan degiskenin icindeki bilgiyi degistirmek:
fullName = "Lorem Ipsum Dolor"
console.log(fullName)

// birlestirme veya ekleme islemi
fullName + "Yeni Eklenen Bilgi" // eklenmez.
console.log(fullName + " Test Bilgisi") // konsola yazdırır ama değişkeni etkilemez.

fullName = fullName + " Yeni Bilgi"
fullName = "2: Bilgi: " + fullName

fullName = "Sifirlandi"
fullName += " ve yeni bilgi eklendi."

console.log(fullName)

// const ile degiskeni bos tanimlamaya calismak :( :
// const serverPassword; //bu şekilde oluşturamazsın hata verir, tanımlaman lazım.

// const ile degisken tanimlamak:
const SERVER_PASSWORD = "oisjefo9jwes221"
console.log(SERVER_PASSWORD)

// const ile degisken tanimladiktan sonra degiskeni degisteremezsin, hata alirsin. const ile degisken tanimlamanin amaci kalici olmasidir.
//SERVER_PASSWORD = "1234"
//console.log(SERVER_PASSWORD)
