
const djur : string[] = ["apa", "oragutang", "gorilla", "get", "giraff"]

console.log(djur)

// Skapa ett objekt med tre egenskaper. En sträng, en siffra och en boolean. Skriv ut objektet till console och testkör.






const animalObj: {name: string, legs: number, tail: boolean} = {
    name: "Nisse",
    legs: 4,
    tail: true,
}

console.log(animalObj)


// Skriv en funktion som tar emot en sträng och returnerar en sträng. Om funktionen tar emot strängen “X” ska den returnera “hej X”

function foo (x:string): string  {
    return `Hej ${x}`
}
console.log(foo("Berit"))

// Loopa igenom arrayen av strängar och kör funktionen på varje sträng och skriv ut till konsollen det du får från arrayen.

djur.forEach(animal => {
    console.log(foo(animal))
});

// Kompilera, kör, commita och pusha.
