"use strict";
const djur = ["apa", "oragutang", "gorilla", "get", "giraff"];
console.log(djur);
const animalObj = {
    name: "Nisse",
    legs: 4,
    tail: true,
};
console.log(animalObj);
function foo(x) {
    return `Hej ${x}`;
}
console.log(foo("Berit"));
djur.forEach(animal => {
    console.log(foo(animal));
});
