// Revealing Module Pattern
let myRevealingModule = (function () {
    let privateVar = "Ben Cherry";
    publicVar = 'hey there!';
    function private() {
        console.log(`Name: ${privateVar}`);
    }
    function publicSetName(strName) {
        privateVar = strName;
    }
    function publicGetName() {
        private();
    }
    return {
        setName: publicSetName(str),
        greeting: publicVar,
        getName: publicGetName(),
    };
});
// myRevealingModule.setName(kmkknmk);
// myRevealingModule.getName();

let revealingModule = (function () {
    let privateCounter = 0;
    function privateFunction() {
        privateCounter++;
        console.log(privateCounter);
    }
    function publicFunction() {
        publicIncrement();
    }
    function publicIncrement() {
        privateFunction();
    }
    function publicGetCount() {
        return privateCounter;
    }
    /* Reval public pointers to private functions and properties */
    return {
        start: publicFunction,
        increment: publicIncrement,
        count: publicGetCount
    };
})();
revealingModule.start();