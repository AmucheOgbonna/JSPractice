function processData(input) {
    //Enter your code here
    var lines = input.split('\n');
    // first line n k
    var n = +(lines[0].split(' ')[0]);
    var k = +(lines[0].split(' ')[1]);
    // second line is each item cost
    var items = lines[1].split(' ');
    // third line is how much brian charged anna
    var annaCharged = +(lines[2]);
    var totalCostOfSharedItems = 0;
    var actualCost = 0;
    items.forEach(function(item, idx) {
        if (idx !== k) {
            totalCostOfSharedItems += (parseInt(item));
        }
        actualCost += (parseInt(item));
    });
    if (annaCharged === (totalCostOfSharedItems / 2)) {
        console.log('Bon Appetit');
    } else {
        console.log((actualCost / 2) - (totalCostOfSharedItems / 2));
    }
} 