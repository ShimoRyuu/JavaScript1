/* DATA TYPES */

    /* object - object innehåller ett eller flera värden */
    //kommer använda object väldigt mycket i js
    // person = {}
    // var person = {}
    // let person = {}
    // const person = {}
    // person = Object     //blir inte ett objekt
    // person = {}
    // person = []             //är egentligen en array men säger objekt

    // console.log(typeof person)

    // används för klasser, object och json
    // använder sig av key:value pairs

    //JS Object
    // var person = {
    //     firstName: 'Hans',
    //     lastName: 'Mattin-Lassei',
    // }

    // //convert to json
    // var json = JSON.stringify(person)       //omvandlat person till ett json object
    // console.log(json)

    //JEGENTLIGEN JS Object
   /*  var json = {
        "firstName": "Hans",
        "lastName": "Mattin-Lassei",
    } */


    //JSON object
    // var json = '{"firstName": "hans", "lastName": "mattin-lassei"}'

    //convert from json to js
    // var person = JSON.parse(json) //kan bara parse en text, ett json object. inte js
    // console.log(person)

    // var name = "bengt"

    /* var person = {
        firstName: 'Hans',
        lastName: 'Mattin-lassei',
        // middleName: `Bengt Lennart`,
        middleName: `${name}`,
        age: 36,
        face: {
            hair: "blond",
            eyes: "blå",
        },
        isEnabled: true,
        height: 165.3,
        fullName: function() {
            // return this.firstName + " " + this.lastName
            return `${this.firstName} ${this.lastName}`
        },
        favoColors: ["yellow", "green", "blue"],

    } */

    // let person2 = { firstName: "Tommy" }

    // 
    // person.firstName
    // console.log(person.face)

    // person['firstName']
    // console.log(person['firstName'])
    // console.log(person.height)

    // let firstName = person.firstName
    // let lastName = person['lastName']
    // console.log(firstName)
    // console.log(lastName)

    // // destructing objects (rekonstruera???)

    // let {firstName: fName, lastName: lName} = person
    // console.log(fName)
    // console.log(lName)

    //functions in js object
    // person.fullName()
    // console.log(person.fullName())

    // let json = JSON.stringify(person)
    // console.log(json)


    // let json = '{ "firstName": "Hans", "lastName": "Mattin-Lassei"}'
    
    // var res = JSON.parse(json)
    // // console.log(res)

    // // let user = res
    // console.log(user)


    // console.log(person.favoColors[1])
    