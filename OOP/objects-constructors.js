function Book(title, author, yearPublished) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
}
const book1 = new Book("Chimamanda", "Amuche Ogbonna", 2022);
const book2 = new Book("Introduction to Programming", "Gary Chapman", 1986);

console.log(book1, book2);

/* Illustrating Inheritance and Prototype */
function ParentBook(author, year) {
    this.author = author;
    this.year = year;
}
let parentBook1 = new ParentBook("Zhao Lying");
/* To create a prototype inorder to share and add method to constructors */
ParentBook.prototype.title = function () {
    //console.log("The Story of Mulan");
    return "The Story of Mulan";
};

function SubBook(author, yearPublished) {
    ParentBook.call(this, author, yearPublished);
    this.yearPublished = yearPublished;
}

SubBook.prototype = Object.create(ParentBook.prototype);//This is to inherit fron the constructor ParentBook and all it's prototypes
/* Or we can do this
const subBook = new SubBook(ParentBook);
*/
SubBook.prototype.summary = function () {
    console.log(`The name of this book is ${this.title()},
     and it's author's name is ${this.author} ,
    and was published in the year ${this.yearPublished}`);
};
let subBook1 = new SubBook("Zhao Lying", 2014);
subBook1.summary();
