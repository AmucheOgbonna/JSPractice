var breakfast = {
    name: "The Lumberjack",
    price: "$9.95",
    ingredients: ["eggs", "sausage", "toast", "hashbrowns", " pancakes"]
};
console.log(breakfast);


var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    // your code goes here
    printAccountSummary: function printSum(params) {
        return "Welcome!\n Your balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%."
            ;
    }
};

console.log(savingsAccount.printAccountSummary());


var facebookProfile = {
    name: "Amuche",
    friends: 107,
    messages: ["How are you?", "Are you ok", "I'm a star"],
    postMessage: function (message) {
        this.messages.push(message);
        return this.messages;
    },
    deleteMessage: function (index) {
        this.messages.splice(index, 1);
        return this.messages;
    },
    addFriend: function () {
        facebookProfile.friends += 1;
        return this.friends;
    },
    removeFriend: function () {
        this.friends -= 1;
        return facebookProfile.friends;
    }
};
console.log(facebookProfile.addFriend());

var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach(function (element) {
    //element[index] + "donuts cost $"+ element[index]
    console.log(element.type + " donuts cost $" + element.cost + " each");

});
