// Write your solution here!
let cats=["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name)
{
    cats.push(name);
}

   
function destructivelyPrependCat(name)
{
    cats.unshift(name);
}

function destructivelyRemoveLastCat()
{
    cats.pop();
}

function destructivelyRemoveFirstCat()
{
    cats.shift();
}

function appendCat(name)
{
    let rat=[...cats,name];
    return rat;
}

function prependCat(name)
{
    let hat=[name,...cats];
    return hat;
}

function removeLastCat()
{
    return cats.slice(0,cats.length-1);
}

function removeFirstCat()
{
    return cats.slice(1);
}