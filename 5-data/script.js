/* 
Data Types

    String      =       Text
    Number      =       Heltal, decimaltal
    Boolean     =       Sant/Falskt True/False
    null        =       totalt tomt
    undefined   =       odefinerat värde
    Object      =       ett objekt/klass som innehåller ett eller fler värden
    Array       =       en lista med värden

*/

// String (text)

name = "Hans"
name = 'Hans'
name = `Hans`
age  = '36'


text = "Jag är \"bäst\" i hela världen"
text = 'Jag är "bäst" i hela världen'
text = 'Jag är "bäst" i \'hela\' världen'   //vanlig text


text = `Jag är "bäst" i hela världen`
text = `Jag är "bäst" i 'hela' världen` //place holder, bäst att skriva med
text = "Jag heter " + name + " och är " + age + " år gammal."
text = 'Jag heter ' + name + ' och är ' + age + ' år gammal.'
text = `Jag heter ${name} och är ${age} år gammal.`

text.length
text.indexOf()
text.replace()
text.toUpperCase()
text.toLowerCase()
text.concat() //slår ihop 2 texter med varandra
text.trim()

// console.log(text.length
// console.log(text.indexOf('Hans')))
// console.log(text.replace('och', '&'))
// console.log(text.toUpperCase())
// console.log(text.toLowerCase())
// console.log(text.concat("tralalalala", text))
console.log(text.trim()) //tar bort tomma blanksteg i början och slutet på en text




// Number

let num1 = 1
let num2 = 1.1  //alla decimal byggs med punkt inte med komma

// console.log(num1)
// console.log(num2)



/* 
    + lägg till
    - ta bort
    * gångra
    / dela
    % divison remainder (udda eller jämna tal)
    ++ öka med 1
    -- minda med 1

*/


// console.log(num1 + num2)
// console.log(num1 - num2)
// console.log(num1 * num2)
// console.log(num1 / num2)
// console.log(num1 % num2)
// console.log(num1++)
// console.log(num1)
// console.log(num1--)
// console.log(num1)

/* 
    =  lika med
    += lägg till
    -= ta bort från
    *= gångra och lägg til
    /= dela och lägg till
    %= divison remainder (udda eller jämna tal)

*/

// console.log(num1 += num2)
console.log(num1 += num2)  //= tar det befintliga värder och lägger på till värdet
console.log(num1 -= num2)
console.log(num1 *= num2)
console.log(num1 /= num2)
console.log(num1 %= num2)


// Boolean

let status = true
    status = false

console.log(status)


// Null och Undefined

// Null är ingenting, har inget värde, har ingen datatyp( i alla andra språk så är null = null. men i js är null = object)
//JS null är ett tomt objekt

let middleName = null
console.log(typeof middleName)

let address
let address2 = undefined
console.log(typeof address)
console.log(typeof address2)
//JSON = Javascript Object Notification
