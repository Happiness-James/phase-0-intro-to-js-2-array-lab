// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
console.log(cats);

function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
}
console.log(destructivelyAppendCat("Ralph"));

function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}
console.log(destructivelyPrependCat("Bob"));

function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}
console.log(destructivelyRemoveLastCat());

function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}
console.log(destructivelyRemoveFirstCat());
console.log(cats);

function appendCat(name){
    const copyOfAppendCats = cats.slice()
    copyOfAppendCats.push(name)
    return copyOfAppendCats;
}
console.log(appendCat("Broom"));

function prependCat(name){
    const copyOfPrependCats = cats.slice()
    copyOfPrependCats.unshift(name)
    return copyOfPrependCats;
}
console.log(prependCat("Arnold"));

function removeLastCat(){
    const copyOfremoveLastCats = cats.slice()
    copyOfremoveLastCats.pop();
    return copyOfremoveLastCats;
}
console.log(removeLastCat());

function removeFirstCat(){
    const copyOfremoveFirstCats = cats.slice()
    copyOfremoveFirstCats.shift();
    return copyOfremoveFirstCats;
}
console.log(removeFirstCat());



