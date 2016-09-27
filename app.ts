//function scope
function doSomething() {
  let something = "Walk Dog";
  console.log(something);
  function doAnotherThing() {
    let something = "Wash Car";
    console.log(something);
  }
}
function doSomethingElse(){
  let something = "Mow Lawn";
  console.log(something);
}

//log "Walk Dog"
doSomething();

//log "Mow Lawn"
doSomethingElse();

//block scope
let today = "Tuesday";
if(today === "Tuesday") {
  let message = "Today is Tuesday";
  console.log(message);
  console.log(today);
}
//Will not work in ES2015, as message only exsists in block scope.
//console.log(message);

let message = "goodbye";
if (1 === 1) {
  let message = "hello"
  console.log(message);
}
console.log(message);
