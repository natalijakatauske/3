console.log('veikia')


let myName = prompt("Please enter your name")
if (myName === 'John') {
    alert("Yes, your name is John")
} else {
    alert('No, your name isnt Johnn')
}

//Uzduotis 1
let answer = prompt("Please enter your answer:")
console.log(answer)

// //Uzduotis 2
if (isNaN(answer)) {
    alert('Tai nera skaicius ' + answer)
} else {
    alert(answer)
}

//Uzduotis 3
let myAnswer = prompt("Please enter:")
for (let i = 0; i < wordsArray.length; i++) {
    if (myAnswer === "nulla") {
    alert('Radome zodi nulla')
    break
    } else {
        console.log("tai ne zodis nulla")
    }
}

//Uzduotis 3.1 NEBAIGTA (neveikia sarase Nr. i)
let myAnswer1 = prompt("Please enter a word:")
for (let i = 0; i < wordsArray.length; i++) {
    if (myAnswer1) {
        alert("Radome zodi " + myAnswer1 + " sarase Nr. " + i)
        break
    } else {
        console.log("Zodis nerastas")
    }
}