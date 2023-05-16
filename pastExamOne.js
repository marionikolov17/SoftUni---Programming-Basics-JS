function agencyProfit(input) {
    let servicePrice = Number(input[4]);
    let avioCompany = input[0];
    let ticketsCountAdults = Number(input[1]);
    let ticketsCountChildren = Number(input[2]);
    let adultTicketPrice = Number(input[3]);
    let childrenTicketPrice = (adultTicketPrice - (adultTicketPrice * 0.7)) + servicePrice;
    adultTicketPrice += servicePrice;
    let profit = ((ticketsCountAdults * adultTicketPrice) + (ticketsCountChildren * childrenTicketPrice)) * 0.2;
    console.log(`The profit of your agency from ${avioCompany} tickets is ${profit.toFixed(2)} lv.`);
}

function addBags(input) {
    let priceBagMore20 = Number(input[0]);
    let bagPounds = Number(input[1]);
    let leftDays = Number(input[2]);
    let bagsCount = Number(input[3]);

    let bagPrice = 0;
    if (bagPounds < 10) {
        bagPrice = priceBagMore20 * 0.2;
    } else if (bagPounds >= 10 && bagPounds <= 20) {
        bagPrice = priceBagMore20 * 0.5;
    } else {
        bagPrice = priceBagMore20;
    }

    if (leftDays > 30) {
        bagPrice = bagPrice + (bagPrice * 0.1);
    } else if (leftDays <= 30 && leftDays >= 7) {
        bagPrice = bagPrice + (bagPrice * 0.15);
    } else {
        bagPrice = bagPrice + (bagPrice * 0.4);
    }

    console.log(`The total price of bags is: ${(bagPrice * bagsCount).toFixed(2)} lv.`);
}

function aluminiumJourney(input) {
    let dogramaCount = Number(input[0]);
    let dogramaType = input[1];
    let deliveryType = input[2];

    if (dogramaCount < 10) {
        console.log("Invalid order");
        return;
    }

    let data = {
        "90X130": {
            "price": 110
        },
        "100X150": {
            "price": 140
        },
        "130X180": {
            "price": 190
        },
        "200X300": {
            "price": 250
        }
    }

    let dogramaPrice = data[dogramaType]["price"] * dogramaCount;


    switch(dogramaType) {
        case "90X130":
            if (dogramaCount >= 30 && dogramaCount < 60) {
                dogramaPrice = dogramaPrice - (dogramaPrice * 0.05);
            } else if (dogramaCount >= 60) {
                dogramaPrice = dogramaPrice - (dogramaPrice * 0.08);
            }
            break;
        case "100X150":
            if (dogramaCount >= 40 && dogramaCount < 80) {
                dogramaPrice = dogramaPrice - (dogramaPrice * 0.06);
            } else if (dogramaCount >= 80) {
                dogramaPrice = dogramaPrice - (dogramaPrice * 0.1);
            }
            break;
        case "130X180":
            if (dogramaCount >= 20 && dogramaCount < 50) {
                dogramaPrice = dogramaPrice - (dogramaPrice * 0.07);
            } else if (dogramaCount >= 50) {
                dogramaPrice = dogramaPrice - (dogramaPrice * 0.12);
            }
            break;
        case "200X300":
            if (dogramaCount >= 25 && dogramaCount < 50) {
                dogramaPrice = dogramaPrice - (dogramaPrice * 0.09);
            } else if (dogramaCount >= 50) {
                dogramaPrice = dogramaPrice - (dogramaPrice * 0.14);
            }
            break;
    }
    //console.log(dogramaPrice);
    if (deliveryType === "With delivery") dogramaPrice += 60;
    if (dogramaCount > 99) dogramaPrice = dogramaPrice - (dogramaPrice * 0.04);
    console.log(`${dogramaPrice.toFixed(2)} BGN`);
}

function balls(input) {
    let n = Number(input[0]);
    let totalPoints = 0;
    let redBallsCount = 0;
    let orangeBallsCount = 0;
    let yelowBallsCount = 0;
    let whiteBallsCount = 0;
    let otherColorsPickedCount = 0;
    let blackBallsCount = 0;
    for (let i = 1; i < input.length; i++) {
        switch(input[i]) {
            case "red":
                totalPoints += 5;
                redBallsCount++;
                break;
            case "orange":
                totalPoints += 10;
                orangeBallsCount++;
                break;
            case "yellow":
                totalPoints += 15;
                yelowBallsCount++;
                break;
            case "white":
                totalPoints += 20;
                whiteBallsCount++;
                break;
            case "black":
                totalPoints = Math.floor(totalPoints / 2);
                blackBallsCount++;
                break;
            default:
                otherColorsPickedCount++;
                break;
        }
    }
    console.log(`Total points: ${totalPoints}`)
    console.log(`Red balls: ${redBallsCount}`)
    console.log(`Orange balls: ${orangeBallsCount}`)
    console.log(`Yellow balls: ${yelowBallsCount}`)
    console.log(`White balls: ${whiteBallsCount}`)
    console.log(`Other colors picked: ${otherColorsPickedCount}`)
    console.log(`Divides from black balls: ${blackBallsCount}`)

}

function bestPlayer(input) {
    let index = 0;
    let footballers = [];
    let scores = [];
    while (input[index] !== "END") {
        let footballer = input[index]; index++;
        let score = Number(input[index]); index++;
        footballers.push(footballer);
        scores.push(score);

        if (score >= 10) {
            break;
        }
    }
    let bestIndex = scores.indexOf(Math.max(...scores));

    console.log(`${footballers[bestIndex]} is the best player!`);
    if (scores[bestIndex] >= 3) {
        console.log(`He has scored ${scores[bestIndex]} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${scores[bestIndex]} goals.`);
    }
}

function barcodeGen(input) {
    let startNum = input[0];
    let endNum = input[1];

    let printLine = "";

    for (let i = Number(startNum); i <= Number(endNum); i++) {
        let currNumAsStr = i.toString();
        let score = 0;
        for (let j = 0; j < currNumAsStr.length; j++) {
            if (Number(currNumAsStr[j]) % 2 !== 0 && Number(currNumAsStr[j]) >= Number(startNum[j]) && Number(currNumAsStr[j]) <= Number(endNum[j])) {
                score++;
            }
        }
        if (score == 4) printLine += `${currNumAsStr} `;
    }
    console.log(printLine)
}


















