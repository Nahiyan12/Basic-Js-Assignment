//problem 1 
function seerToMon(seer) {
    var Mon = seer / 1000;
    return Mon;
}

var Myseer = 39;
var Mon = seerToMon(Myseer);
console.log("My seer' in mon' is", Mon)

//problem 2
function totalSales(shirt, pant, shoes) {
    var shirt = 100 * 4;
    var pant = 200 * 6;
    var shoes = 500 * 8;
    var Sales = shirt + pant + shoes;
    return Sales;
}

var Sales = totalSales(Sales)
console.log("The total price of all sales is", Sales)

//problem 3

function deliveryCost(shippingPrice, shirtPrice, extraFee) {
    var shippingPrice = 100;
    var shirtAmount = 101;
    var shirtPrice = 10 * shirtAmount;
    var extraFee = 80;
    var Cost = shirtPrice + shippingPrice + extraFee;
    return Cost;
}
var Cost = deliveryCost(Cost)
console.log("The total cost of the delivery is", Cost)

//problem 4

function perfectFriend(Bob, Jhon, Timmy, Tim) {
    const friends = ["Tim", "Bob", "Jhon", "Timmy", "Bobby", "Joe"];
    return friends[3];
}
var bestFriend = perfectFriend(bestFriend)
console.log(bestFriend)