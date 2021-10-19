let testModule = (function () {
    let _count = 0;
    console.log(_count);
    return {
        increaseCount: function () {
            return _count++;
        },
        resetCount: function () {
            console.log('Counter value prior to reset:' + _count);
            _count = 0;
        }
    };
})();

testModule.increaseCount();
testModule.resetCount();

let myNameSpace = (function () {
    let _myPrivateVar, _myPrivateMethod;
    _myPrivateVar = 0;
    _myPrivateMethod = function (variabe) {
        console.log(variabe);
    };
    return {
        myPublicVar: "Variable",
        myPublicFuntion: function (item) {
            _myPrivateVar++;
            _myPrivateMethod(item);
        }
    };
})();
myNameSpace.myPublicFuntion("Ogbonna");

let basketModule = (function () {
    let _basket = [];
    function doSometingPrivate() {
        // ,,,,
    }
    function doSomethingAgain() {
        // ...
    }
    return {
        addItem: function (values) {
            _basket.push(values);
        },
        getItemCount: function () {
            return _basket.length;
        },
        doSomething: doSometingPrivate(),
        getTotal: function () {
            let q = this.getItemCount();
            let p = 0;
            while (q--) {
                p += _basket[q].price;
            }
            return p;
        }
    };
})();

basketModule.addItem({
    item: "bread",
    price: 0.5
});
basketModule.addItem({
    item: "butter",
    price: 3.4
});
console.log(basketModule.getItemCount());
console.log(basketModule.getTotal());