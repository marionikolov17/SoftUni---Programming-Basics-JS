function townShop(input) {
    let data = {
        "Sofia": {
            "coffee": 0.5,
            "water": 0.8,
            "beer": 1.2,
            "sweets": 1.45,
            "peanuts": 1.6
        },
        "Plovdiv": {
            "coffee": 0.4,
            "water": 0.7,
            "beer": 1.15,
            "sweets": 1.3,
            "peanuts": 1.5
        },
        "Varna": {
            "coffee": 0.45,
            "water": 0.7,
            "beer": 1.10,
            "sweets": 1.35,
            "peanuts": 1.55
        }
    }
    console.log(data[input[1]][input[0]] * Number(input[2]))
}
function isValidNumber(input) {
	if ((Number(input[0]) >= 100 && Number(input[0]) <= 200) || Number(input[0]) === 0) {
    	console.log("")
    } else {
        console.log("invalid");
    }
}

function fruitShop(input) {
    let weekData = {
        "banana": 2.5,
        "apple": 1.2,
        "orange": 0.85,
        "grapefruit": 1.45,
        "kiwi": 2.7,
        "pineapple": 5.5,
        "grapes": 3.85
    }
    let weekendData = {
        "banana": 2.7,
        "apple": 1.25,
        "orange": 0.9,
        "grapefruit": 1.6,
        "kiwi": 3,
        "pineapple": 5.6,
        "grapes": 4.2
    }
    switch(input[1]) {
        case "Monday":
        case "Tuesday":
        case "Thursday":
        case "Wednesday":
        case "Friday":
            if ( weekData[input[0]] ) {
            console.log((weekData[input[0]] * Number(input[2])).toFixed(2));
            break;
            }
            else {
                console.log("error");
                break;
            }
        case "Saturday":
        case "Sunday": 
            if (weekendData[input[0]]) {
            console.log((weekendData[input[0]] * Number(input[2])).toFixed(2));
            break;
            } else {
                console.log("error");
                break;
            }
        default:
            console.log("error");
            break;
    }
}

function tradeCommissions(input) {
    let city = input[0];
    let s = Number(input[1]);
    let commision;
    switch(city) {
        case "Sofia":
            if (s >= 0 && s <= 500) {
                commision = `${s * 0.05}`
            } else if (s > 500 && s <= 1000) {
                commision = `${s * 0.07}`
            } else if (s > 1000 && s <= 10000) {
                commision = `${s * 0.08}`;
            } else if (s > 10000) {
                commision = `${s * 0.12}`
            } else {
                commision = `error`;
            }
            break;
        case "Varna": 
            if (s >= 0 && s <= 500) {
                commision = `${s * 0.045}`
            } else if (s > 500 && s <= 1000) {
                commision = `${s * 0.075}`
            } else if (s > 1000 && s <= 10000) {
                commision = `${s * 0.1}`;
            } else if (s > 10000) {
                commision = `${s * 0.13}`
            } else {
                commision = `error`;
            }
            break;
        case "Plovdiv": 
            if (s >= 0 && s <= 500) {
                commision = `${s * 0.055}`
            } else if (s > 500 && s <= 1000) {
                commision = `${s * 0.08}`
            } else if (s > 1000 && s <= 10000) {
                commision = `${s * 0.12}`;
            } else if (s > 10000) {
                commision = `${s * 0.145}`
            } else {
                commision = `error`;
            }
            break;
        default:
            commision = `error`;
            break;
    }
    if (commision !== "error") {
        console.log(Number(commision).toFixed(2))
    } else {
        console.log(commision);
    }
}


function summerOutfit(input) {
    let degrees = Number(input[0]);
    let time = input[1];
    let data = {
        "cold": {
            "Morning": {
                "Outfit": "Sweatshirt",
                "Shoes": "Sneakers"
            },
            "Afternoon": {
                "Outfit": "Shirt",
                "Shoes": "Moccasins"
            },
            "Evening": {
                "Outfit": "Shirt",
                "Shoes": "Moccasins"
            }
        },
        "warm": {
            "Morning": {
                "Outfit": "Shirt",
                "Shoes": "Moccasins"
            },
            "Afternoon": {
                "Outfit": "T-Shirt",
                "Shoes": "Sandals"
            },
            "Evening": {
                "Outfit": "Shirt",
                "Shoes": "Moccasins"
            }
        },
        "hot": {
            "Morning": {
                "Outfit": "T-Shirt",
                "Shoes": "Sandals"
            },
            "Afternoon": {
                "Outfit": "Swim Suit",
                "Shoes": "Bare foot"
            },
            "Evening": {
                "Outfit": "Shirt",
                "Shoes": "Moccasins"
            }
        }
    }
    if ( degrees >= 10 && degrees <= 18 ) {
        console.log(`It's ${degrees} degrees, get your ${data["cold"][time]["Outfit"]} and ${data["cold"][time]["Shoes"]}.`);
    } else if (degrees > 18 && degrees <= 24) {
        console.log(`It's ${degrees} degrees, get your ${data["warm"][time]["Outfit"]} and ${data["warm"][time]["Shoes"]}.`);
    } else if (degrees >= 25) {
        console.log(`It's ${degrees} degrees, get your ${data["hot"][time]["Outfit"]} and ${data["hot"][time]["Shoes"]}.`);
    }
}

function newHouse(input) {
    let flower = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);
    let data = {
        "Roses": 5,
        "Dahlias": 3.8,
        "Tulips": 2.8,
        "Narcissus": 3,
        "Gladiolus": 2.5
    }
    let firstPrice = data[flower] * flowersCount;
    if (flower === "Roses" && flowersCount > 80) firstPrice = firstPrice - (firstPrice * 0.1)
    else if (flower === "Dahlias" && flowersCount > 90) firstPrice = firstPrice - (firstPrice * 0.15)
    else if (flower === "Tulips" && flowersCount > 80) firstPrice = firstPrice - (firstPrice * 0.15)
    else if (flower === "Narcissus" && flowersCount < 120) firstPrice = firstPrice + (firstPrice * 0.15)
    else if (flower === "Gladiolus" && flowersCount < 80) firstPrice = firstPrice + (firstPrice * 0.2)
    if (budget >= firstPrice) {
        console.log(`Hey, you have a great garden with ${flowersCount} ${flower} and ${(budget - firstPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(firstPrice - budget).toFixed(2)} leva more.`);
    }
}

function fishingBoat(input) {
    let groupBudget = Number(input[0]);
    let season = input[1];
    let fishersCount = Number(input[2]);
    let discount;
    let finalShipPrice;
    if (season === "Summer") {
        if (fishersCount <= 6) {
            discount = 0.1;
        } else if (fishersCount > 6 && fishersCount <= 11) {
            discount = 0.15;
        } else {
            discount = 0.25;
        }
        finalShipPrice = 4200 - (4200 * discount);
        if (fishersCount % 2 == 0) finalShipPrice = finalShipPrice - (finalShipPrice * 0.05);
    } else if (season === "Autumn") {
        if (fishersCount <= 6) {
            discount = 0.1;
        } else if (fishersCount > 6 && fishersCount <= 11) {
            discount = 0.15;
        } else {
            discount = 0.25;
        }
        finalShipPrice = 4200 - (4200 * discount);
    }
    else if (season === "Winter") {
        //console.log("yes");
        if (fishersCount <= 6) {
            discount = 0.1;
        } else if (fishersCount > 6 && fishersCount <= 11) {
            discount = 0.15;
        } else {
            discount = 0.25;
        }
        finalShipPrice = 2600 - (2600 * discount);
        if (fishersCount % 2 == 0) finalShipPrice = finalShipPrice - (finalShipPrice * 0.05);
    } else {
        if (fishersCount <= 6) {
            discount = 0.1;
        } else if (fishersCount > 6 && fishersCount <= 11) {
            discount = 0.15;
        } else {
            discount = 0.25;
        }
        finalShipPrice = 3000 - (3000 * discount);
        if (fishersCount % 2 == 0) finalShipPrice = finalShipPrice - (finalShipPrice * 0.05);
    }
    finalShipPrice <= groupBudget ? 
    console.log(`Yes! You have ${(groupBudget - finalShipPrice).toFixed(2)} leva left.`)
    :
    console.log(`Not enough money! You need ${(finalShipPrice - groupBudget).toFixed(2)} leva.`);
}

function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let price;
    if (budget <= 100) {
        season === "summer" ? console.log(`Somewhere in Bulgaria \nCamp - ${(budget * 0.3).toFixed(2)}`) 
        : 
        console.log(`Somewhere in Bulgaria \nHotel - ${(budget * 0.7).toFixed(2)}`)

    } else if (budget > 100 && budget <= 1000) {
        season === "summer" ? console.log(`Somewhere in Balkans \nCamp - ${(budget * 0.4).toFixed(2)}`) 
        : 
        console.log(`Somewhere in Balkans \nHotel - ${(budget * 0.8).toFixed(2)}`)
    } else {
        season === "summer" ? console.log(`Somewhere in Europe \nHotel - ${(budget * 0.9).toFixed(2)}`) 
        : 
        console.log(`Somewhere in Europe \nHotel - ${(budget * 0.9).toFixed(2)}`)
    }
}

function operationsBetweenNumbers(input) {
    let numOne = Number(input[0]);
    let numTwo = Number(input[1]);
    let operator = input[2];
    let result;
    if (eval(`${numOne} ${operator} ${numTwo}`) && numTwo !== 0) {
        result = eval(`${numOne} ${operator} ${numTwo}`);
        if (operator === "+" || operator === "-" || operator === "*") {
            console.log(`${numOne} ${operator} ${numTwo} = ${result} - ${result % 2 === 0 ? "even" : "odd"}`);
        } else if (operator === "/") {
            console.log(`${numOne} ${operator} ${numTwo} = ${result.toFixed(2)}`);
        } else {
            console.log(`${numOne} ${operator} ${numTwo} = ${result}`);
        }
    } else {
        console.log(`Cannot divide ${numOne} by zero`);
    }
}

function hotelRoom(input) {
    let month = input[0];
    let nightsCount = Number(input[1]);
    let studioPrice, aparmentPrice;
    let studioDiscount= 0;
    let apartmentDiscount = 0;
    if (nightsCount > 14) apartmentDiscount = 0.1;
    if (month === "May" || month === "October") {
        if (nightsCount > 7 && nightsCount <= 14) {
            studioDiscount = 0.05;
        } else if (nightsCount > 14) {
            studioDiscount = 0.3;
        }
        studioPrice = nightsCount * (50 - (50 * studioDiscount));
        aparmentPrice = nightsCount * (65 - (65 * apartmentDiscount));
    } else if (month === "June" || month === "September") {
        if (nightsCount > 14) {
            studioDiscount = 0.2;
        }
        studioPrice = nightsCount * (75.2 - (75.2 * studioDiscount));
        aparmentPrice = nightsCount * (68.7 - (68.7 * apartmentDiscount));
    } else {
        studioPrice = nightsCount * (76 - (76 * studioDiscount));
        aparmentPrice = nightsCount * (77 - (77 * apartmentDiscount));
    }
    console.log(`Apartment: ${aparmentPrice.toFixed(2)} lv. \nStudio: ${studioPrice.toFixed(2)} lv.`);
}

/*
(["9",
"30",
"9",
"50"])
*/

function onTimeForExam(input) {
    let examHours = Number(input[0]);
    let examMinutes = Number(input[1]);
    let arrivingHours = Number(input[2]);
    let arrivingMinutes = Number(input[3]);
    let hoursDifference = 0;
    let minutesDifference;
    let status;
    /* if (examMinutes > 30 + arrivingMinutes) {
        if (examHours === arrivingHours) {
            status = "Early";
        } else if (examHours > arrivingHours && examHours - arrivingHours === 1) {
            status = "Early"
        }
        status = "Early";
    } else if (examMinutes <= 30 + arrivingMinutes && examMinutes >= arrivingMinutes) {
        status = "On time";
    } else if (examMinutes < arrivingMinutes) {
        status = "Late";
    } */
    
    if (examHours === arrivingHours) {
        
        if (examMinutes > 30 + arrivingMinutes) {
            status = "Early";
        } else if (examMinutes <= 30 + arrivingMinutes && examMinutes >= arrivingMinutes) {
            status = "On time";
        } else if (examMinutes < arrivingMinutes) {
            status = "Late";
        }
    } else if ((examHours > arrivingHours && examHours - arrivingHours === 1) && examMinutes !== 0) {
        status = "Early";
        if (arrivingMinutes > examMinutes) {
            examMinutes += 60;
        } else {
            hoursDifference = examHours - arrivingHours;
        }
    } else if ((examHours > arrivingHours && examHours - arrivingHours === 1) && examMinutes === 0) {
        if (examMinutes === 0) examMinutes += 60
        if (examMinutes > 30 + arrivingMinutes) {
            status = "Early";
        } else if (examMinutes <= 30 + arrivingMinutes && examMinutes >= arrivingMinutes) {
            status = "On time";
        } else if (examMinutes < arrivingMinutes) {
            status = "Late";
        }
    } 
    else if (examHours > arrivingHours && examHours - arrivingHours > 1) {
        status = "Early";
        hoursDifference = examHours - arrivingHours;
        if (arrivingMinutes > examMinutes) {
            examMinutes += 60;
            hoursDifference -= 1;
        }
        
    }
    else if ((examHours < arrivingHours && arrivingHours - examHours === 1) && arrivingMinutes !== 0) {
        //console.log("Yes")
        status = "Late";
        if (examMinutes > arrivingMinutes) {
            arrivingMinutes += 60;
        } else {
            hoursDifference = arrivingHours - examHours;
        }
    } else if (examHours < arrivingHours) {
        status = "Late";
        hoursDifference = arrivingHours - examHours;
    }
    minutesDifference = Math.abs(arrivingMinutes - examMinutes);
    //console.log(minutesDifference)
    if (status === "Early" || status === "On time") {
        if (minutesDifference === 0 && hoursDifference === 0) {
            console.log(status);
        }
        else if (hoursDifference === 0 && minutesDifference !== 0 && minutesDifference !== 60) {
            minutesDifference > 10 ?
            console.log(`${status}\n${minutesDifference} minutes before the start`)
            :
            console.log(`${status}\n${minutesDifference} minutes before the start`);
        } else if (hoursDifference === 0 && minutesDifference === 60) {
            console.log(`1:00 hours before the start`)
        } 
        else {
            minutesDifference > 10 ?
            console.log(`${status}\n${hoursDifference}:${minutesDifference} hours before the start`)
            :
            console.log(`${status}\n${hoursDifference}:0${minutesDifference} hours before the start`);
        }
    } else {
        if (hoursDifference === 0 && minutesDifference !== 60) {
            minutesDifference > 10 ?
            console.log(`${status}\n${minutesDifference} minutes after the start`)
            :
            console.log(`${status}\n${minutesDifference} minutes after the start`);
        } else if (hoursDifference === 0 && minutesDifference === 60) {
            console.log("1:00 hours after the start");
        } 
        else {
            minutesDifference > 10 ?
            console.log(`${status}\n${hoursDifference}:${minutesDifference} hours after the start`)
            :
            console.log(`${status}\n${hoursDifference}:0${minutesDifference} hours after the start`);
        }
    }
}

function skiTrip(input) {
    let days = Number(input[0]);
    let roomType = input[1];
    let grade = input[2];

    let price = 0;
    let nightsCount = days - 1;

    switch(roomType) {
        case "room for one person":
            price = nightsCount * 18;
            break;
        case "apartment":
            price = nightsCount * 25;
            if (nightsCount < 10) {
                price = price - (price * 0.3);
            } else if (nightsCount >= 10 && nightsCount <= 15) {
                price = price - (price * 0.35);
            } else {
                price = price - (price * 0.5);
            }
            break;
        case "president apartment":
            price = nightsCount * 35;
            if (nightsCount < 10) {
                price = price - (price * 0.1);
            } else if (nightsCount >= 10 && nightsCount <= 15) {
                price = price - (price * 0.15);
            } else {
                price = price - (price * 0.2);
            }
            break; 
    }
    grade === "positive" ? price = price + (price * 0.25) : price = price - (price * 0.1);
    console.log(price.toFixed(2))
}
















































