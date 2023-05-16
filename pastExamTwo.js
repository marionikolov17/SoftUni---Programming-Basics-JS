function birthDayParty(input) {
    let startPrice = Number(input);
    let cakePrice = startPrice * 0.2;
    let drinksPrice = cakePrice - (cakePrice * 0.45);
    let animatorPrice = startPrice / 3;
    console.log(startPrice + cakePrice + drinksPrice + animatorPrice)
}

function changeBuro(input) {
    let bitcoins = Number(input[0]) * 1168;
    let chinese = Number(input[1]) * 0.15 * 1.76;
    let comission = Number(input[2]) / 100;
    let money = (bitcoins + chinese) / 1.95;
    money = money - (money * comission)
    console.log(money.toFixed(2))
}

function catWalking(input) {
    let minutesWalking = Number(input[0]);
    let walkingsCount = Number(input[1]);
    let eatenCalories = Number(input[2]);

    let burnedCalories = (minutesWalking * walkingsCount * 5);
    let calories = eatenCalories * 0.5;

    burnedCalories >= calories ?
    console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burnedCalories}.`)
    :
    console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnedCalories}.`);
}

function mountainRun(input) {
    let recordInSec = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timePerMeter = Number(input[2]);

    let seconds = distanceInMeters * timePerMeter + (Math.floor(distanceInMeters / 50) * 30);

    seconds < recordInSec ?
    console.log(`Yes! The new record is ${seconds.toFixed(2)} seconds.`)
    :
    console.log(`No! He was ${Math.abs(seconds - recordInSec).toFixed(2)} seconds slower.`);
}

function energyBooster(input) {
    let fruit = input[0];
    let size = input[1];
    let countPurchased = Number(input[2]);

    let data = {
        "Watermelon": {
            "small": 2 * 56,
            "big": 5 * 28.7
        },
        "Mango": {
            "small": 2 * 36.66,
            "big": 5 * 19.6
        },
        "Pineapple": {
            "small": 2 * 42.1,
            "big": 5 * 24.8
        },
        "Raspberry": {
            "small": 2 * 20,
            "big": 5 * 15.2
        },
    }

    let price = countPurchased * data[fruit][size];
    if (price >= 400 && price <= 1000) price = price - (price * 0.15)
    else if (price > 1000) price = price - (price * 0.5)
    console.log(`${price.toFixed(2)} lv.`)
}

function fitnessCard(input) {
    let availableSum = Number(input[0]);
    let gender = input[1];
    let age = Number(input[2]);
    let sport = input[3];

    let data = {
        "m": {
            "Gym": 42,
            "Boxing": 41,
            "Yoga": 45,
            "Zumba": 34,
            "Dances": 51,
            "Pilates": 39
        },
        "f": {
            "Gym": 35,
            "Boxing": 37,
            "Yoga": 42,
            "Zumba": 31,
            "Dances": 53,
            "Pilates": 37
        }
    }

    let cardPrice = data[gender][sport];
    if (age <= 19) cardPrice = cardPrice - (cardPrice * 0.2);

    availableSum >= cardPrice ?
    console.log(`You purchased a 1 month pass for ${sport}.`)
    :
    console.log(`You don't have enough money! You need $${(cardPrice - availableSum).toFixed(2)} more.`)
}

function foodForPets(input) {
    let index = 0
    let days = Number(input[index]); index++;
    let totalAmountFood = Number(input[index]); index++;
    let totalEatenBisc = 0;
    let totalEatendFood = 0;
    let eatenDog = 0;
    let eatenCat = 0;

    for (let i = 0; i < days; i++) {
        let dogFood = Number(input[index]); index++;
        let catFood = Number(input[index]); index++;
        totalEatendFood += dogFood + catFood;
        eatenDog += dogFood;
        eatenCat += catFood;
        if ((i + 1) % 3 === 0) {
            //console.log(Math.round(dogFood + catFood))
            totalEatenBisc += (dogFood + catFood) * 0.1
        }
        //console.log(totalEatenBisc)
    }

    console.log(`Total eaten biscuits: ${Math.round(totalEatenBisc)}gr.`);
    console.log(`${((totalEatendFood / totalAmountFood) * 100).toFixed(2)}% of the food has been eaten.`)
    console.log(`${((eatenDog / totalEatendFood) * 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${((eatenCat / totalEatendFood) * 100).toFixed(2)}% eaten from the cat.`)

}

function trekkingMania(input) {

}







