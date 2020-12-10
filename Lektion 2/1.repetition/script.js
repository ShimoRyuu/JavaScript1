/* CONSOLE */
// console.log('vanligt meddelande')
// console.warn('varningsmeddelande')
// console.error('felmeddelande')

/* DOM - Document Object Model (HTML, CSS + JS) */
// document.body.innerText = 'Hejsan'
// document.body.innerHTML = 'hejsan'
// document.body.createElement('div').innerText = 'hhh'   skapar felmeddelande se console

// console.log(document.getElementById('input-id').value)
// 1 let results = document.getElementById('input-id').value
// let results = document.getElementsByName('input-name')[0].value
// let results = document.getElementsByTagName('input')[0].value
// let results = document.getElementsByClassName('input-class')[0].value

// 1 let results = document.querySelector('#input-id').value
// let results = document.querySelector('input').value //automatisk tar det första värdet den hittar
// let results = document.querySelector('.input-class').value


// document.getElementById('results').innerText = results


/* VARIABLES */
// name = 'Hans'               // Deklarerar något globalt. DON'T DO THIS
// var name = 'Hans'           // Deklarerar något globalt. DON'T DO THIS
// let name = 'Hans'            DO THIS. Deklarerar något lokalt i ett scope
// const name = 'Hans'          DO THIS. Deklarerar något skrivskyddat lokalt.

/* function viewVariable() {
    // var name = 'Kalle'
    let name = 'Kalle'
    return name
} */


// console.log(Variable())
// console.log(name)


/* DATA TYPES */
// string, number, boolean, null, undefined, object, array[, symbols]

    /* string - till för texter  */
    // var name = 'Hans'
    // var name = "Hans"
    // var name = `Hans`       // när vi vill använda placeholders för variabler

    // var text = "Jag använder \"citat\" tecken och 'enkel' fnuttar och variabeln "+ name +"."
    // var text = 'Jag använder "citat" tecken och \'enkel\' fnuttar och variabeln '+ name +'.'
    // var text = `Jag använder "citat" tecken och 'enkel' fnuttar och variabeln ${name}.`
    // var email = 'hans.mattin-lassei@utb.ecutbildning.se'
    // var number = 1

    // console.log(text.length)
    // console.log(text.indexOf('och'))
    // console.log(text.lastIndexOf('och'))
    // console.log(text.replace('och', '&'))
    // console.log(text.replaceAll('och', '&'))
    // console.log(text.toLocaleLowerCase())
    // console.log(text.toLowerCase())
    // console.log(text.toLocaleUpperCase())
    // console.log(text.toUpperCase())
    // console.log(text.concat(text, name))
    // console.log(text.trim())
    // console.log(email.split('@'))
    // console.log(number.toString())      //kan konvertera till en text

    /* number - till för nummer av olika slag heltal och decimaltal och store tal */

    // number = 1
    // var number = 1
    // let number = 1
    // const number = 1


    // let number = 1
    // number = 'hej'
    // console.log(number)

    // JS (.js) let value = 1;      DET GÅR ATT GÖRA value = 'hej;
    // C# (.cs) int number = 1;       DET GÅR INTE ATT GÖRA  number = 'hej';
    // TS (.ts) value: number = 1;    DET GÅR DÅ INTE ATT GÖRA   value = 'hej';

    // let value1 = 1
    // let value2 = '1'

    // if(1=='1') {
    //     console.log('ja det stämmer det är samma värde')
    // }

    // var value = 1
    // var value = 2.5
    // var value = 1e+6
    // var value = 1e-6
    // var value = 9999999999999999;
    // console.log(value)

    // let value1 = 11
    // let value2 = 5

    // result = value1 + value2
    // result = value1 - value2
    // result = value1 * value2    //använder han ofta
    // result = value1 / value2    //använder han ofta
    // result = value1 % value2    //inte ofta
    
    // result += value1            //använder ofta
    // result -= value1            //använder ofta
    // result *= value1
    // result /= value1
    // result %= value1

    // result = value1 += value2

    // console.log(result)

    // Number(true);           //returns 1
    // Number(false);          //returns 0
    // Number("10");           //returns 10
    // Number(" 10");          //returns 10
    // Number("10 ");          //returns 10
    // Number(" 10 ");         //returns 10
    // Number("10.33");        //returns 10.33
    // Number("10,33");        //returns NaN
    // Number("10 33");        //returns NaN
    // Number("John");         //returns NaN

    // let value = 1
    // console.log(value.toString())   //gör om till en text

    /* boolean - sant eller falskt (true/false) (1/0) */

    // status = false
    // status = true

    /* undefined - när den inte vet vad den är för typ */

    // var value = 
    // // let value

    // console.log(typeof value)

    /* null - är definerad men saknar ett värde */

    // value = null
    // var value = null
    // let value = null
    // const value = null
    
    // console.log(typeof value)
