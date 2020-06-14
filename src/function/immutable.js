import { produce } from "immer";

let book = { title: "My own Glass" };

function adds(book) {
  book.subTitle = "is not broken";
  return produce(book, (draftBook) => {
    draftBook.subtitle2 = "and not empty";
  });
}
let updateSubtilt = adds(book);
console.log(book);
console.log(updateSubtilt);
