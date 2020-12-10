/* ARRAYS - en lista med ett eller flera värden */

// names = []
// var names = []
// let names = []
// const names = []

// const name = "hans"
// name = "Tommy"       // funkar inte att göra

// const names = ["Hans"]
// names [0] = "Tommy"      // funkar

// const person = {
//     firstName: "Hans"
// }
// person.firstName = "Tommy"

// console.log(names)
// console.log(person.firstName)

// const names = ["Hans", "Tommy", "Anna", "Karin"]
// console.log(names)
// console.log(names.length)
// console.log(names.indexOf("Hans"))

// const multiarray = ["text", 12, true]        //går att blanda, men gör det inte
// const objectarray = [
//     { firstName: "Hans", age:12, status:true},
//     { firstName: "Tommy", age:33, status:false},
//     { firstName: "Anna", age:112, status:true},
// ]

// const numberarray = [1, 2, 3, 4, 5]
// // console.log(array)
// // console.log(objectarray[1])
// // console.log(multiarray[1])
// // console.log(numberarray[1])


// objectarray.forEach(function(person, index){
//     console.log(person.firstName, index)
// })

let names = ['Hans', 'Tommy', 'Anna']

// .unshift() - lägg till i början av en array
// names.unshift(0)

// .shift() - tar bort första värdet i en array
// names.shift()

// .push() - lägg till i slutet av en array
// names.push(0)

// .pop() - ta bort sista värdet i en array
// names.pop()

// .sort - sorterar arrayen i A-Z ordning
// names.sort()

// .reverse - ändrar arrayen i ordning sista till först
// names.reverse() 

// nestlad array - .sort() .reverse() etc.
// names.push('Z')
// names.sort().reverse()


// delete - tar bort ett värde från en specifik position
// delete names[1]


// splice() - tar bort/lägg till ett värde från en specifik postition
// names.splice(2, 0, "Sarah")     //lägger till
// names.splice(1, 1)          //ta bort, ska du ta bort flera saker bättre att använda

// .indexOf() - hitta ett specifikt index av ett värde
// names.indexOf('Anna')
// console.log(names.indexOf('Anna'))

// exempel på att ta bort 1
// delete names[names.indexOf('Anna')]

// console.log(names.length)


// names.forEach((value, index) => console.log(index.value))
// console.log(names)

// let numbers = [1, 2, 3, 4, 5]
// numbers.forEach(function())

// for(var name in names) {
//     console.log(name)
// }

//. forEach() - loopar igenom hela arrayen
// names.sort().forEach(function(name, index) {
//     // console.log(index, name)
//     console.log(name)

//     // names[index] += " hej"
// })
// // console.log(names)

// // med arrow-functions (lambda fuctions/lambda expression)
// names.forEach((name, index) => {
//     console.log(index, name)
// })

// names.forEach((name) => {
//     console.log(name)
// })

// names.forEach((name) => console.log(name))


// for loop - det gamla sättet att loopa igenom en array
// for (var i=0; i < names.length; i++) {
//     console.log(names[i]);
// }

// // .map - 
// let people = [
//     { firstName: "Hans", lastName: "Mattin-Lassei"},
//     { firstName: "Anna", lastName: "Nyman"},
//     { firstName: "Tommy", lastName: "Mattin-Lassei"},
//     { firstName: "Anders", lastName: "Andersson"},
// ]

// // let firstnames = people.map(person => {
// //     return person.firstName
// // })
// // console.log(firstnames)


// // .filter - 
// let specificpeople = people.filter(person => {
//     return person.lastName == "Mattin-Lassei"
// })

// console.log(specificpeople)

