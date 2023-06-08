// Write your solution here!

var cats = ["Milo", "Otis", "Garfield" ];

function destructivelyAppendCat (name){
     return cats.push(name);
   
}

function destructivelyPrependCat(name){
    return cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    return cats.pop()
}

function destructivelyRemoveFirstCat(){
    return cats.shift()
}


function appendCat(name){
    let newArray =[...cats]
    newArray[3]= name
   return newArray
}


function prependCat(name){
    let newValue =[...cats];
    newValue.unshift(name)
    return newValue
}

function removeLastCat(){
    let newCats =[...cats];
    newCats.pop()
    return newCats;
}

function removeFirstCat(){
    let newArr = [...cats];
    newArr.shift()
    return newArr
}