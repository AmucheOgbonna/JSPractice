const MyBook = function (a, b) {
    let author = a;
    let title = b;

    return {
        summary: function () {
            console.log(`The title of the book is ${title} and the author is ${author}`);
        },
    };
};
const MyBook1 = MyBook("Amuche Joe", "The Victor");
console.log(MyBook1.summary());