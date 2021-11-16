const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id)=>{
    console.log(`data received username: ${name} id:${id} `)
})
customEmitter.on('response', ()=>{
    console.log(`another logic. `)
})
customEmitter.emit('response', 'John', 2)