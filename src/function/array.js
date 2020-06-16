var a = [4, 5, 6, 3, 7, 8];

arr.push(2);
console.log(arr);
const index = arr.indexOf(3);
console.log(index);

const added = [...arr.slice(0, index), 2, ...arr.slice(index)];
console.log(added);

const remove = (arr.filter = arr.filter((n) => n !== 2));
console.log(remove);

const updated = arr.map((n) => (n === 5 ? 20 : n));
console.log(updated);

arr = {
  a: 1,
  b: 2,
};
let xarr = [];
for (let i in arr) {
  xarr.push(i);
}
console.log(xarr);

const { reverse } = require("lodash");

let x = "hi";
let y = "ih";
const strreverse = (str) => {
  return str.split("").reverse().join("");
};
console.log(strreverse(x));

const obj = {
  a: 1,
  b: 2,
  getA() {
    console.log(this.a);
    return this;
  },
  getB() {
    console.log(this.b);
  },
};
obj.getA().getB();

arr = [5, 6];
console.log(arr);
console.log(String(arr));
