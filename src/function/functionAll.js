function sayHello() {
  return "Hello world !!";
}

let fn = sayHello();
let fn2 = sayHello;
fn2();
console.log(fn, fn2());

function great(msgfun) {
  console.log(msgfun());
}
great(sayHello);

function funinfun() {
  return function () {
    return "Hello Again Buddy";
  };
}
console.log(funinfun());
let number = [1, 2, 3];
number.map((num) => console.log(num * 2));
console.log(number);
