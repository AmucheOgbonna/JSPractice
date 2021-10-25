/* 
*Enter file to out application
Creating a simple server
*/

const http = require('http');
const url = require('url');
const { StringDecoder } = require('string_decoder');
const routeHandler = require('./lib/routeHandler');
//const { buffer } = require('stream/consumers');


const httpServer = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    const pathName = parsedUrl.pathname;
    const trimedUrl = pathName.replace(/^\/+|\/+$/g, "");
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const header = req.headers;
    console.log(parsedUrl);
    res.setHeader('content-type', 'application/json');

    const decoder = new StringDecoder('utf-8');


    let buffer = "";
    req.on('data', (data) => {
        buffer += decoder.write(data);
    });

    req.on('end', () => {
        buffer += decoder.end();
        // console.log('decoder result', buffer);
        const parsedPayload = JSON.parse(JSON.stringify(buffer));
        // const parsedPayload = JSON.parse(buffer);
        // const parsedPayload = JSON.stringify(JSON.parse(buffer));
        const data = {
            trimedUrl: trimedUrl,
            queryObj: queryStringObject,
            method: method,
            headers: header,
            payload: parsedPayload
        };

        const choosenHandler = typeof (router[trimedUrl]) !== 'undefined' ? router[trimedUrl] : router[notFound];
        //Use the chosenHandler to handle request
        choosenHandler(data, (statusCode, result) => {
            statusCode = typeof (statusCode) === 'number' ? statusCode : 200;
            result = typeof (res) === 'object' ? result : {};

            const responseObj = JSON.stringify(result);

            // console.log('header obj', header);//Uses postman
            // console.log("query Object", queryStringObject);//curl "localhost:8081/about/?name=amuche&age=21"
            // console.log("... in the server");
            //console.log(`the url gotten was ${pathName}`);
            // console.log(`the url visited was ${trimedUrl} and method is ${method} .`);


            // res.write(JSON.stringify({
            //     Response: "request got to the server",
            //     payload: parsedPayload

            // }));
            // res.end();
            res.writeHead(statusCode);
            res.write(responseObj);
            // res.write(toString(responseObj));
            res.end();
        });


    });

});

httpServer.listen(8081, () => {
    console.log("Server is listening on port 8081");
});

const router = {
    ping: routeHandler.ping,
    notFound: routeHandler.notFound,
    books: routeHandler.Books,
};


