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

/*
 * Purchases a grandma producer if we can afford it
 */
function canBuyGrandma() {
    // If we can afford a grandma...
    if(currCookieAmount >= 20) {
        // Buy a grandma
        currCookieAmount = currCookieAmount - 20;
        currGrandmaAmount = currGrandmaAmount + 1;
        cookieAmountElement.text(currCookieAmount + " Cookies!");
        grandmaProducerAmountElement.text(currGrandmaAmount + " Grandmas!");
    }
}

grandmaProducerBuyElement.on("click", canBuyGrandma);

/*
 * Purchases a monkey producer if we can afford it
 */
function canBuyMonkey() {
    // If we can afford a Monkey...
    if(currCookieAmount >= 40) {
        // Buy a Monkey
        currCookieAmount = currCookieAmount - 40;
        currMonkeyAmount = currMonkeyAmount + 1;
        cookieAmountElement.text(currCookieAmount + " Cookies!");
        monkeyProducerAmountElement.text(currMonkeyAmount + " Monkeys!");
    }
}

monkeyProducerBuyElement.on("click", canBuyMonkey);

setInterval(() => {
    increaseCookieCount(1 * currGrandmaAmount);
    increaseCookieCount(2 * currMonkeyAmount);
}, 1000)