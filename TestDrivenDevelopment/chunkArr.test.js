const {chunkArr} = require('./chunkArr');

test('to check if function is defined', ()=>{
    expect(chunkArr).toBeDefined()
})

test('chunk an arrar of 10 values with len 2',()=>{
    const numArr = [1,2,3,4,5,6,7,8,9,10]
    const len = 4
    expect(chunkArr(numArr, len)).toEqual([[1,2,3,4], [5,6,7,8],[9,10]])
})