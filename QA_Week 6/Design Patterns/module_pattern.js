/**
 *
 * Example 1: Using the Revealing Module Pattern
 *
 */

let simpleModule1 = (function () {
  let library = []

  return {
    addBooksToLibrary: function (nameOfBook) {
      library.push(nameOfBook)
    },
    viewAllBooks: function () {
      return library
    },
  }
})()

simpleModule1.addBooksToLibrary('Eat that goat.')
simpleModule1.addBooksToLibrary('Dance with me baby.')

let simpleModule2 = (function () {
  let _privateVariable = 'I am a private variable'
  let publicVariable = 'I am meant to be public'

  const _privateFunc = function () {
    //Do something
  }
  const publicFunc = function () {
    // Do something
  }

  return {
    publicVariable: publicVariable,
    publicFunc: publicFunc,
  }
})()

let simpleModule3 = (function (param1) {
  let _privateVariable = 'I am a private variable'
  let publicVariable = 'I am meant to be public'

  const _privateFunc = function () {
    //Do something
  }
  const publicFunc = function () {
    // Do something
  }

  return {
    publicVariable: publicVariable,
    publicFunc: publicFunc,
  }
})(param1)
