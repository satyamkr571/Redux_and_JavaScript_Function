import { compose, pipe } from "lodash/fp";

let input = "   JavaScript   ";
let ouput = "<div>" + input.trim() + "</div>";
const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>${str}</div>`;
const lower = (str) => str.toLowerCase();

const result = wrapInDiv(lower(trim(input)));
console.log(ouput + "  " + result);

// const transform = compose(wrapInDiv, lower, trim);
const res = pipe(trim, wrapInDiv, lower);

console.log(res(input));
