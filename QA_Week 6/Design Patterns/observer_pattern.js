function ObserversList(params) {
  this.observersList = []
}

ObserversList.prototype.add = function (observer) {
  if (observer) {
    this.observersList.push(observer)
  }
}

ObserversList.prototype.remove = function (index) {
  if (index >= 0 && index < this.observersList.length) {
    this.observersList.splice(index, 1)
    return index
  }

  return -1
}

ObserversList.prototype.count = function () {
  return this.observersList.length
}

ObserversList.prototype.get = function (index) {
  if (index >= 0 && index < this.observersList.length) {
    return this.observersList[index]
  }
}

// Subject
function Subject() {
  this.observers = new ObserversList()
}

Subject.prototype.addObserver = function (observer) {
  this.observers.add(observer)
}

Subject.prototype.removeObserver = function (observer) {
  this.observers.remove(observer)
}

Subject.prototype.notify = function (context) {
  this.observers.observersList.forEach(observer => observer.update(context))
}

// Observer constructor function
function Observer(name) {
  this.name = name
  this.update = function (context) {
    console.log(`I am ${this.name}, I received this update data`, context)
    console.log('This is all the data I have: ', this)
  }
}

const subjectA = new Subject()
const observerA = new Observer('Observer A')
const observerB = new Observer('Observer B')

subjectA.addObserver(observerA)
subjectA.addObserver(observerB)
subjectA.notify({ notifier: 'Elliot', portfolio: 'Frontend Engineer' })

// let observerListA = new ObserversList()
// console.log(observerListA.count())
