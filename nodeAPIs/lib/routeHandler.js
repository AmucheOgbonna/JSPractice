const routeHandler = {};
routeHandler.Books = (data, callback) => {
    const acceptableHeaders = ["post", "get", "put", "delete"];
    if (acceptableHeaders.indexOf(data.method) > -1) {
        routeHandler._books[data.method](data, callback);
    } else {
        callback(405);
    }
};
//main book route Object
routeHandler._books = {};

//post route--for creating a book
routeHandler._books.post = (data, callback) => { };
//Get route--for getting a book
routeHandler._books.get = (data, callback) => {
    callback(200, { Response: "...in the book hander" });
};
//Put route--for updating a book
routeHandler._books.put = (data, callback) => { };
// Delete route--for deleting a book
routeHandler._books.delete = (data, callback) => { };

routeHandler.ping = (data, callback) => (
    callback(200, { Response: 'server is live' })
);
routeHandler.notFound = (data, callback) => (
    callback(404, {
        Response: 'not found'
    })
);


module.exports = routeHandler;