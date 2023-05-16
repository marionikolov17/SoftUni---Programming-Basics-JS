function excursion(input) {
    let peopleInGroup = Number(input[0]);
    let nights = Number(input[1]);
    let cardsForTransport = Number(input[2]);
    let ticketsForMuseum = Number(input[3]);

    let totalPrice = nights * 20 + cardsForTransport * 1.6 + ticketsForMuseum * 6;
    totalPrice *= peopleInGroup;
    totalPrice += totalPrice * 0.25;
    console.log(totalPrice.toFixed(2))
}

function deerOfSanta(input) {
    let missingDays = Number(input[0]);
    let leftFood = Number(input[1]);
    let foodForFirstInDay = Number(input[2]);
    let foodForSecondInDay = Number(input[3]);
    let foodForThirdInDay = Number(input[4]);

    let requiredFood = foodForFirstInDay * missingDays + foodForSecondInDay * missingDays + foodForThirdInDay * missingDays;

    leftFood >= requiredFood ?
    console.log(`${Math.floor(leftFood - requiredFood)} kilos of food left.`)
    :
    console.log(`${Math.ceil(requiredFood - leftFood)} more kilos of food are needed.`)
}

function currierExpress(input) {
    let targetMass = Number(input[0]);
    let serviceType = input[1];
    let distance = Number(input[2]);

    let pricePerKm = 0;
    let pricePerKmExpress = 0;
    if (targetMass < 1.00) {
        pricePerKm = 0.03;
        pricePerKmExpress = pricePerKm * 0.8;
    } else if (targetMass >= 1.00 && targetMass < 10) {
        pricePerKm = 0.05;
        pricePerKmExpress = pricePerKm * 0.4;
    } else if (targetMass >= 10 && targetMass < 40) {
        pricePerKm = 0.1;
        pricePerKmExpress = pricePerKm * 0.05;
    } else if (targetMass >= 40 && targetMass < 90) {
        pricePerKm = 0.15;
        pricePerKmExpress = pricePerKm * 0.02;
    } else if (targetMass >= 90 && targetMass <= 150) {
        pricePerKm = 0.2;
        pricePerKmExpress = pricePerKm * 0.01;
    }

    pricePerKmExpress *= targetMass;
    let markup = distance * pricePerKmExpress;
    let priceTransport = pricePerKm * distance;

    if (serviceType === "express") {
        priceTransport += markup;
    }
    console.log(`The delivery of your shipment with weight of ${targetMass.toFixed(3)} kg. would cost ${priceTransport.toFixed(2)} lv.`);
    
}

function exam(input) {
    let students = Number(input[0]);
    let topStudents = 0;
    let secondStudents = 0;
    let thirdStudents = 0;
    let fourthStudents = 0;
    let avgGrade = 0;

    for (let i = 1; i < input.length; i++) {
        let grade = Number(input[i]);
        avgGrade += grade;
        if (grade >= 5.00) {
            topStudents++;
        } else if (grade <= 4.99 && grade >= 4.00) {
            secondStudents++;
        } else if (grade <= 3.99 && grade >= 3.00) {
            thirdStudents++;
        } else if (grade < 3) {
            fourthStudents++;
        }
    }

    console.log(`Top students: ${((topStudents / students) * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${((secondStudents / students) * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${((thirdStudents / students) * 100).toFixed(2)}%`);
    console.log(`Fail: ${((fourthStudents / students) * 100).toFixed(2)}%`);
    console.log(`Average: ${(avgGrade / students).toFixed(2)}`)
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

function sumAndProduct(input) {
    let n = Number(input[0]);

    for (let i = 1; i <= 9; i++) {
        for(let j = 9; j >= i; j--) {
            for (let m = 0; m <= 9; m++) {
                for (let k = 9; k >= m; k--) {
                    //console.log(`${i} - ${j} - ${m} - ${k}`);
                    let sum = i + j + m + k;
                    let product = i * j * m * k;
                    if (sum == product && n % 10 == 5) {
                        let num = i * 1000 + j * 100 + m * 10 + k;
                        console.log(num);
                        return;
                    } else if (Math.floor(product / sum) == 3 && n % 3 == 0) {
                        let num = k * 1000 + m * 100 + j * 10 + i;
                        console.log(num);
                        return;
                    }
                }
            }
        }
    }
    console.log("Nothing found");
}









