let LibraryModule = (function () {
    let adminAuth = true;
    let authorizedUser = ["AMUCHE", "KACHI", "ELLIOT", "BLACKGIT", "JERRY", "VICTOR", "LIVINUS", "CYNTHIA", "LUCY", "YEMI"];
    let borrowedBook = [];
    let init = false;
    let bookList = [
        {
            Id: 1,
            title: "Avatar",
            Genre: "Science",
            ISBN: 2009,
            author: "Jidex Philips",
            numberAvaiable: 5
        },
        {
            Id: 2,
            title: "Beauty and the Beast",
            Genre: "Art",
            ISBN: 2199,
            author: "Maggie John",
            numberAvaiable: 2
        },
        {
            Id: 3,
            title: "Introduction to Programming",
            Genre: "Science",
            ISBN: 1009,
            author: "John Doe",
            numberAvaiable: 1
        }
    ];
    function addBook(title, genre, isbn, author, num) {
        this.title = title;
        this.genre = genre;
        this.isbn = isbn;
        this.author = author;
        this.num = num;
        let id = bookList.length + 1;
        bookList.push({
            Id: id,
            title: title,
            Genre: genre,
            ISBN: isbn,
            author: author,
            numberAvaiable: num
        });
        // console.log(bookList);
    }
    function viewLibraryBooks() {
        let lib = [];
        bookList.forEach(function (element) {
            lib.push({
                title: element.title,
                numberAvaiable: element.numberAvaiable
            });
        });
        console.log(lib);

    }
    function viewBorrowedBooks() {
        for (const element of borrowedBook) {
            console.log(`${element} has been borrowed`);
        }
    }
    return {
        //To add book, this has to be authorised by admin
        toAddBook: function () {
            if (adminAuth) {
                const addingBook = new addBook("Homemaking Tutorials", "Science", 2048, "Amuche", 1);
                console.log(addingBook);
            }
        },
        //Checks if title matches, adds it to the list of borrowed book, then minus it by 1
        borrowBook: function (userName, bookTitle) {
            let username = userName.toUpperCase();
            if (authorizedUser.includes(username)) {
                const getIndex = bookList.findIndex((book) => {
                    return book.title === bookTitle;
                });
                if (bookList[getIndex].numberAvaiable === 0) {
                    console.log(`This book ${bookTitle} is temporarly unavailable`);
                } else {
                    init = true;
                    borrowedBook.push(bookList[getIndex].title);
                    bookList[getIndex].numberAvaiable--;
                    // Print the elements in the borrowed book array
                    viewBorrowedBooks();
                }
            }
        },
        returnBook: function (booktitle) {
            const getIndex = bookList.findIndex((book) => {
                return book.title === booktitle;
            });
            if (init === false) {
                console.log(`First borrow a book, ${booktitle} has not yet been borrowed`);
            } else {
                borrowedBook.splice(getIndex, 1);
                bookList[getIndex].numberAvaiable++;
                // Print the Libray books and num availabe
                viewLibraryBooks();
            }
        },
        donateBook: function (title) {
            this.title = title;
            let id = bookList.length + 1;
            bookList.push({
                Id: id,
                title: title,
                Genre: "to be documented",
                ISBN: "to be documented",
                author: "to be documented",
                num: null
            });
            viewLibraryBooks();
        }
    };
})();

LibraryModule.toAddBook();
LibraryModule.borrowBook("amuche", "Avatar");
LibraryModule.returnBook("Avatar");
LibraryModule.donateBook('Avarice');
