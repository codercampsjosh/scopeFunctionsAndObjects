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
