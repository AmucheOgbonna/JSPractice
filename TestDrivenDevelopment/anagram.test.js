const isAnagram = require('./anagram')

test('to check if isAnagram exists',()=>{
    expect(typeof isAnagram).toEqual('function')
})
test('to check if below is an anagram of elbow',()=>{
    expect(isAnagram('elbow', 'below')).toBeTruthy()
})
test('to check if below is not an anagram of elbows',()=>{
    expect(isAnagram('elbows', 'below')).toBe('Not equivalent')
})