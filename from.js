// Arrow function

// Array.from(arrayLike, (element) => { ... } )
// Array.from(arrayLike, (element, index) => { ... } )

// Mapping function

// Array.from(arrayLike, mapFn)
// Array.from(arrayLike, mapFn, thisArg)

// Inline mapping function

// Array.from(arrayLike, function mapFn(element) { ... })
// Array.from(arrayLike, function mapFn(element, index) { ... })
// Array.from(arrayLike, function mapFn(element) { ... }, thisArg)
// Array.from(arrayLike, function mapFn(element, index) { ... }, thisArg)

var test = Array.from('foo');
console.log(test);//Array from a string

const mapper = new Map([['1', 'a'], ['2', 'b']]);
console.log(Array.from(mapper.values()));
console.log(Array.from(mapper.keys()));

console.log(Array.from([1, 2, 3], x => x + x));
console.log(Array.from({ length: 6 }, (v, i) => i));


const range = (start, stop, step) =>
    Array.from({ length: (stop - start) / step + 1 }, (_, i) =>
        start + (i * step));
console.log(range(0, 4, 1));
console.log(range(1, 10, 1));

console.log(range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 13).map(x =>
    String.fromCharCode(x)));



var obj = { // does not create a new scope
    i: 10,
    b: () => console.log(this.i, this),
    c: function () {
        console.log(this.i, this);
    }
};

obj.b(); // prints undefined, Window {...} (or the global object)
obj.c(); // prints 10, Object {...}