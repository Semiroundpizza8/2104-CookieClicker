const cookieAmountElement = $("#cookie-amount");
const createCookieElement = $("#create-cookie-button");
const grandmaProducerAmountElement = $("#grandma-producer .producer-amount");
const grandmaProducerBuyElement = $("#grandma-producer .producer-buy-button");
const monkeyProducerAmountElement = $("#monkey-producer .producer-amount");
const monkeyProducerBuyElement = $("#monkey-producer .producer-buy-button");

let currCookieAmount = 40;
let currGrandmaAmount = 0;
let currMonkeyAmount = 0;

/*
 * Function to increase the number of cookies by a specific amount
 */
function increaseCookieCount(amountToIncrease) {
  currCookieAmount = currCookieAmount + amountToIncrease;
  cookieAmountElement.text(currCookieAmount + " Cookies!");
}

createCookieElement.on("click", () => increaseCookieCount(1));

// /*
//  * Purchases a grandma producer if we can afford it
//  */
// function canBuyGrandma() {
//     // If we can afford a grandma...
//     if(currCookieAmount >= 20) {
//         // Buy a grandma
//         currCookieAmount = currCookieAmount - 20;
//         currGrandmaAmount = currGrandmaAmount + 1;

//         // Update the interface with new numbers
//         cookieAmountElement.text(currCookieAmount + " Cookies!");
//         grandmaProducerAmountElement.text(currGrandmaAmount + " Grandmas!");
//     }
// }

// grandmaProducerBuyElement.on("click", canBuyGrandma);

// /*
//  * Purchases a monkey producer if we can afford it
//  */
// function canBuyMonkey() {
//     // If we can afford a Monkey...
//     if(currCookieAmount >= 40) {
//         // Buy a Monkey
//         currCookieAmount = currCookieAmount - 40;
//         currMonkeyAmount = currMonkeyAmount + 1;

//         // Update the interface with new numbers
//         cookieAmountElement.text(currCookieAmount + " Cookies!");
//         monkeyProducerAmountElement.text(currMonkeyAmount + " Monkeys!");
//     }
// }

// monkeyProducerBuyElement.on("click", canBuyMonkey);

const producers = [
  {
    name: "Grandma",
    price: 20,
    value: 1,
    amount: 0,
    amountElement: $("#grandma-producer .producer-amount"),
    buyElement: $("#grandma-producer .producer-buy-button"),
  },
  {
    name: "Monkey",
    price: 40,
    value: 2,
    amount: 0,
    amountElement: $("#monkey-producer .producer-amount"),
    buyElement: $("#monkey-producer .producer-buy-button"),
  },
  {
    name: "Cookinator",
    price: 100,
    value: 10,
    amount: 0,
    amountElement: $("#cookinator-producer .producer-amount"),
    buyElement: $("#cookinator-producer .producer-buy-button"),
  },
];

function canBuy(producer) {
  // If we can afford the producer
  if (currCookieAmount >= producer.price) {
    // Buy the producer
    currCookieAmount = currCookieAmount - producer.price;
    producer.amount = producer.amount + 1;

    // Update the producer element to reflect purchase
    cookieAmountElement.text(currCookieAmount + " Cookies!");
    producer.amountElement.text(producer.amount + " " + producer.name + "s!");
  }
}

// Add listeners for all the buy buttons
for(var i = 0; i<producers.length; i++) {
    const producer = producers[i];
    producer.buyElement.click(() => canBuy(producer));
}

// Every second, add new cookies to our total cookie count
setInterval(() => {
    for(var i = 0; i<producers.length; i++) {
        const producer = producers[i];
        increaseCookieCount(producer.value * producer.amount);
    }
}, 1000);
