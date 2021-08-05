//LOops
//Quiz LuciaNeon
var x = 15;                                         //Start loop here
while (x < 20) {
    //if(x % 3=== 0 || x % 5===0 || (x % 3=== 0 && x % 5 === 0) ){}                         //Give instustruction on what the loop should achieve
    var number = (x % 3 === 0 && x % 5 === 0) ?
        console.log("JuliaJames") :
        x % 5 === 0 ?
            console.log("James") :
            x % 3 === 0 ?
                console.log("Julia") :
                console.log(x);
    x = x + 1;                                     //loop increment               
}

console.log("Juice");
//Bottles of Juice (QUiz)
var num = 3;
while (num >= 1) {

    if (num > 2) {
        console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!");
    } else if (num === 2) {
        console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num - 1) + " bottle of juice on the wall!");
    } else {
        console.log(num + " bottle of juice on the wall! " + num + " bottle of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!");
    }
    num = num - 1;
}

//Countdown, LIftoff (Quiz)
var secondsCount = 60;
while (secondsCount >= 0) {
    if (secondsCount === 50) {
        console.log("Orbiter transfers from ground to internal power");
    } else if (secondsCount === 31) {
        console.log("Ground launch sequencer is go for auto sequence start");
    } else if (secondsCount === 16) {
        console.log("Activate launch pad sound suppression system");
    } else if (secondsCount === 10) {
        console.log("Activate main engine hydrogen burnoff system");
    } else if (secondsCount === 6) {
        console.log("Main engine start");
    } else if (secondsCount === 0) {
        console.log("Solid rocket booster ignition and liftoff!");
    } else {
        console.log("T-" + secondsCount + " seconds");
    }
    secondsCount = secondsCount - 1;
}
/* var x = 9;
while (x >= 1) {
  console.log("hello " + x);
  x = x - 1;
}
To rewrite the for loop
*/
for (var x = 9; x >= 1; x--) {
    console.log("hello " + x);
}
//Quiz Factorial
var solution = 1;
for (var number = 1; number <= 12; number++) {
    solution = solution * number;
    console.log(solution);
}

//QUiz---FInd my seat
for (var row = 0; row < 26; row++) {
    for (var seat = 0; seat < 100; seat++) {
        console.log(row + " - " + seat);
    }
}