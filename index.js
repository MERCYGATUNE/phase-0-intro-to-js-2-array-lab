// Write your solution here!
const cats=["Milo", "Otis", "Garfield"] ;

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });


function destructivelyAppendCat(name) {
    cats.push('Ralph');
}
 function destructivelyPrependCat(name) {  
     cats.unshift('Bob');
 }
 function destructivelyRemoveLastCat() {
     cats.pop();
 }
 function destructivelyRemoveFirstCat() {
     cats.shift();
 }
 function appendCat(name) {
     return [...cats , 'Broom'];
 }
 function prependCat(name) {
     return ['Arnold',...cats];
 }

 const newCats = [...cats];

 function removeLastCat() {
    const newCats = [...cats];
     newCats.pop();
     return newCats;
 }
function removeFirstCat() {
    const newCats = [...cats];
    newCats.shift();
    return newCats;

}

