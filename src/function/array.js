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
