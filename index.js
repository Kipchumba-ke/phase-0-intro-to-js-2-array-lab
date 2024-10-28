// Write your solution here!
//let cats = ["Milo", "Otis", "Garfield"];

//function destructivelyAppendCat(name){
//    cats.push(name);
//}
//
//function destructivelyPrependCat(name){
//    cats.unshift(name);
//}

//function destructivelyRemoveLastCat(name){
//    cats.pop(name);
//}

//function destructivelyRemoveFirstCat(name){
//    cats.shift(name);
//}

//function appendCat(name){
//    return[...cats, name];
//}

//function prependCat(name){
//    return[name, ...cats];
//}
//console.log(cats);

//const removeLastCat = cats.slice[-1];
//function removeLastCat(){
//    return cats.slice(0, -1);
//}
//const removeFirstCat = cats.slice[1];
//function removeFirstCat(){
//    return cats.slice(1);
//}


// Write your solution here!
let cats = [];
cats.push(`Milo`, `Otis`, `Garfield`)
console.log(cats);

function destructivelyAppendCat(){
cats.push('Ralph');
return cats;
}

function destructivelyPrependCat(){
cats.unshift("Bob")
return cats;
}

function destructivelyRemoveLastCat(){
cats.pop()
return cats;
}

function destructivelyRemoveFirstCat(){
cats.shift()
return cats;
}

function appendCat(){
cats = [...cats, `Broom`]
return cats;
}

function prependCat(){
cats.pop();
cats = [`Arnold`, ...cats]
return cats;
}

function removeLastCat(){
cats.shift();
cats.splice(-1);
return cats;
}

function removeFirstCat(){
cats.push(`Garfield`);
cats.shift()
return cats;
}