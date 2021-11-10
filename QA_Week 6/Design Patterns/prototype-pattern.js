// Constructor Function
function LearnableIntern(name, gender) {
  this.name = name
  this.gender = gender
}

LearnableIntern.prototype = {
  getDetails: function () {
    return `${this.name} + ${this.gender}`
  },
}

const internA = new LearnableIntern('Jonah', 'Transgender')
const internB = new LearnableIntern('Chukwuma', 'Undecided')
console.log(internA, internB)

let object = {
  name: 'Elliot',
  gender: 'Male',
}

let object2 = Object.create(object)

let aSimpleModule = (function () {
  let privateVar = 'private variable'
  let privateFunction = () => 'private function'

  return {
    publicVar: 'I am a public variable',
    publicFunction: function () {
      console.log(privateVar)
      console.log(privateFunction())
    },
  }
})()

aSimpleModule.publicFunction()

/**
 *
 * Example 2: Using the Revealing Module Pattern
 *
 */

const myNamesCollection = (function () {
  let namesCollection = []

  return {
    addName: _addName,
    deleteName: _deleteName,
    displayNames: _displayNames,
  }

  function _displayNames() {
    return namesCollection
  }

  function _addName(name) {
    namesCollection.push(name)
  }

  function _deleteName(nameToBeDeleted) {
    if (!namesCollection.includes(nameToBeDeleted)) {
      console.log('Name does not exist in my collection.')
      return
    }

    namesCollection = namesCollection.filter(name => name !== nameToBeDeleted)
    console.log('The existing names are: ', _displayNames())
  }
})()

myNamesCollection.addName('Elliot')
myNamesCollection.addName('Goodness')
myNamesCollection.displayNames()
myNamesCollection.deleteName('Elliot')

/*
=======================================
EXAMPLE 3: Shopping Basket
========================================
*/

/*
=======================================
EXAMPLE 4: Module pattern with global object parameters (Import mixins)
=======================================
*/

// Globally formulated JQuery Object
const jQ = function (selector) {
  return {
    html: function (command) {
      // Do some calculation
    },
  }
}

// Globally formulated lodash Object
const _ = {
  min: function (array) {
    //Do some calculation
  },
}

// Some Global module
var myModule = (function (jQ, _) {
  function privateMethod1() {
    jQ('.container').html('test')
  }

  function privateMethod2() {
    console.log(_.min([10, 5, 100, 2, 1000]))
  }

  return {
    publicMethod: function () {
      privateMethod1()
    },
  }

  // Pull in jQuery and Underscore
})(jQ, _)
