
const functions = require('./function');

// const initDatabase = ()=>console.log('Intialized...')
// const closeDatabase =()=>console.log('Closed...')

/* beforeEach(()=>initDatabase());
afterEach(()=>closeDatabase()); */ //You can use arrow functions

// beforeAll(()=>initDatabase());
// afterAll(()=>closeDatabase());

const nameCheck = () => {
    console.log('Checking Name ...');
}
describe('to check Name', () => {
    beforeEach(()=>nameCheck())

    const user = "Jeff";
    test('user is Jeff', ()=>{
        expect(user).toBe('Jeff');
    })
    test('user is Nelson', ()=>{
        expect(user).not.toBe('Nelson');
    })
})



test('add 2 + 2 to equal', () => {
    expect(functions.add(2, 2)).toBe(4);
})

test('add 2+2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
})

test('to checkValue', () => {
    expect(functions.checkValue('hello')).toBe('hello')
})

test('to Checkvalue of array', () => {
    expect(functions.checkValue([1, 2, 3])).toEqual([1, 2, 3])
})