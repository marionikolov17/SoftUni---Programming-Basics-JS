function toyShop(input) {
    let price = Number(input[0]);
    let sum = Number(input[1]) * 2.6 + Number(input[2]) * 3 + Number(input[3]) * 4.1 + Number(input[4]) * 8.2 + Number(input[5]) * 2;
    let toysCount = Number(input[1]) + Number(input[2]) + Number(input[3]) + Number(input[4]) + Number(input[5]);
    let discount = toysCount > 50 ? sum * 0.25 : 0;
    sum = sum - discount;
    let rent = sum * 0.1;
    let profit = sum - rent;

    profit > price ? console.log(`Yes! ${(profit - price).toFixed(2)} lv left.`) : console.log(`Not enough money! ${(price - profit).toFixed(2)} lv needed.`);
}

function godzillaKong(input) {
    let decorSum = Number(input[0]) * 0.1;
    let clothesSum = Number(input[1]) < 151 ? Number(input[1]) * Number(input[2]) : (Number(input[1]) * Number(input[2])) - (Number(input[1]) * Number(input[2]) * 0.1);
    //console.log(clothesSum);
    (Number(input[0]) - (decorSum + clothesSum)) >= 0 ? console.log(`Action! \nWingard starts filming with ${(Number(input[0]) - (decorSum + clothesSum)).toFixed(2)} leva left.`) :
    console.log(`Not enough money! \nWingard needs ${Math.abs(Number(input[0]) - (decorSum + clothesSum)).toFixed(2)} leva more.`)
    //console.log(Number(input[0]))
}

function swimmingRecord(input) {
    let swimmingTimeNeeded = Number(input[1]) * Number(input[2]) + Math.floor(Number(input[1]) / 15) * 12.5;
    Number(input[0]) > swimmingTimeNeeded ? console.log(`Yes, he succeeded! The new world record is ${swimmingTimeNeeded.toFixed(2)} seconds.`)
    :
    console.log(`No, he failed! He was ${(swimmingTimeNeeded - Number(input[0])).toFixed(2)} seconds slower.`);
}

function shopping(input) {
    let priceVideocards = Number(input[1]) * 250;
    let priceProcessors = Number(input[2]) * (priceVideocards * 0.35);
    let priceRAM = Number(input[3]) * (priceVideocards * 0.1);
    let sum = Number(input[1]) > Number(input[2]) ? (priceVideocards + priceProcessors + priceRAM) - (priceVideocards + priceProcessors + priceRAM) * 0.15
    :
    priceVideocards + priceProcessors + priceRAM;
    Number(input[0]) >= sum ? console.log(`You have ${(Number(input[0]) - sum).toFixed(2)} leva left!`)
    : 
    console.log(`Not enough money! You need ${(sum - Number(input[0])).toFixed(2)} leva more!`);
}

function lunchBreak(input) {
    let leftTime = Number(input[2]) - (Number(input[2]) * (1 / 8)) - (Number(input[2]) * (1 / 4));
    leftTime >= Number(input[1]) ? console.log(`You have enough time to watch ${input[0]} and left with ${Math.ceil(leftTime - Number(input[1]))} minutes free time.`)
    :
    console.log(`You don't have enough time to watch ${input[0]}, you need ${Math.ceil(Number(input[1]) - leftTime)} more minutes.`);
}











