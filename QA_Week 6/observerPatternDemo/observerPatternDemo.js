const input = document.querySelector('.js-input')

// Get all observers
const pObserver1 = document.querySelector('.js-p1')
const pObserver2 = document.querySelector('.js-p2')
const pObserver3 = document.querySelector('.js-p3')

// update functions for observers
const updateP1 = text => (pObserver1.textContent = text)
const updateP2 = text => (pObserver2.textContent = text)
const updateP3 = text => (pObserver3.textContent = text)

// Subscribe and unsubscribe functions
const subscribeP1 = document.querySelector('.js-subscribe-p1')
const unsubscribeP1 = document.querySelector('.js-unsubscribe-p1')

const subscribeP2 = document.querySelector('.js-subscribe-p2')
const unsubscribeP2 = document.querySelector('.js-unsubscribe-p2')

const subscribeP3 = document.querySelector('.js-subscribe-p3')
const unsubscribeP3 = document.querySelector('.js-unsubscribe-p3')

// Create observers list constructor function
function ObserversList() {
  this.observers = []
}

ObserversList.prototype.add = function (observer) {
  this.observers.push(observer)
}
ObserversList.prototype.remove = function (observerToBeRemove) {
  if (observerToBeRemove) {
    this.observers = this.observers.filter(observer => observer !== observerToBeRemove)
  }
}
ObserversList.prototype.getObservers = function (observerToBeRemove) {
  return this.observers
}

// Create Input Subject
function InputSubject() {
  this.inputObserversList = new ObserversList()
}

InputSubject.prototype.addObserver = function (observer) {
  this.inputObserversList.add(observer)
}
InputSubject.prototype.removeObserver = function (observer) {
  this.inputObserversList.remove(observer)
}

InputSubject.prototype.notifyAll = function (text) {
  const allSubscribedObservers = this.inputObserversList.getObservers()

  allSubscribedObservers.forEach(subscribedObserver => {
    subscribedObserver(text)
  })
}

const inputSubject = new InputSubject()

//add observers to input subject
inputSubject.addObserver(updateP1)
inputSubject.addObserver(updateP2)
inputSubject.addObserver(updateP3)

// Implement subscribe and unsubscribe for observers
// Subscribe and unsubscribe functions
subscribeP1.addEventListener('click', () => {
  inputSubject.addObserver(updateP1)
})
unsubscribeP1.addEventListener('click', () => {
  inputSubject.removeObserver(updateP1)
})

// Listen to change from input subject
input.addEventListener('input', e => {
  inputSubject.notifyAll(e.target.value)
})
