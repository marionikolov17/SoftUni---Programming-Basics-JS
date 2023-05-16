function combinations(input) {
    let num = Number(input[0]);
    let totalCombinations = 0;
    for (let x1 = 0; x1 <= num; x1++) {
        for (let x2 = 0; x2 <= num; x2++) {
            for (let x3 = 0; x3 <= num; x3++) {
                if (x1 + x2 + x3 == num) {
                    totalCombinations++;
                }
            }
        }
    }
    console.log(totalCombinations)
}

function sumOfTwoNumbers(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let magicNum = Number(input[2]);
    let combinationNum = 0;
    let isFound = false;
    for (let i = startNum; i <= endNum; i++) {
        for (let j = startNum; j <= endNum; j++) {
            combinationNum++;
            if (i + j == magicNum) {
                console.log(`Combination N:${combinationNum++} (${i} + ${j} = ${magicNum})`);
                isFound = true;
                break;
            }
        }
        if (isFound) return;
    }
    console.log(`${combinationNum} combinations - neither equals ${magicNum}`);
}

function travelling(input) {
    let index = 0;
    let destination = input[index];
    index++;
    let minBudget = Number(input[index]);
    index++;
    let destinations = [];
    let sum = 0;
    while(input[index] !== undefined) {
        let command = input[index]; index++;
        if (Number(command)) {
            /* if (Number(command[index-1])) console.log("yes") */
            sum = sum + Number(command);
            //console.log(sum)
            if (sum >= minBudget) {
                destinations.push(destination);
                sum = 0;
                //console.log("yes");
            }
            //console.log(`1 - ${command}`);
        } else if (!Number(command) && command !== "End") {
            sum = 0;
            destination = input[index - 1]; index++;
            minBudget = Number(input[index - 1]);
            /* console.log(destination)
            console.log(minBudget)
            console.log(`2 - ${command}`); */
        } else if (!Number(command) && command === "End") {
            break;
        }
    }
    //console.log(destinations);
    for (let i = 0; i < destinations.length; i++) {
        console.log(`Going to ${destinations[i]}!`);
    }
}

function building(input) {
    let totalFloors = Number(input[0]);
    let roomsOnFloor = Number(input[1]);
    for (let i = totalFloors; i >= 1; i--) {
        let printLine = "";
        for (let j = 1; j <= roomsOnFloor; j++) {
            if (i == totalFloors) {
                printLine += `L${i}${j-1} `
            } else if (i % 2 == 0) {
                printLine += `O${i}${j-1} `
            } else {
                printLine += `A${i}${j-1} `
            }
        }
        console.log(printLine);
    }
}

function numberPyramid(input) {
    let n = Number(input[0]);
    let current = 1;
    let isBigger = false;
    for (let rows = 1; rows <= n; rows++) {
        let printLine = "";
        for (let cols = 1; cols <= rows; cols++) {
            if (current > n) {
                isBigger = true;
                break;
            }

            printLine += `${current} `;
            current++;
        }
        console.log(printLine);
        if (isBigger) break;
    }
}

function equalSumsEvenOddPosition(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let printLine = "";
    for (let i = startNum ; i <= endNum; i++) {
        let oddSum = 0;
        let evenSum = 0;

        let currNumStr = i.toString();
        for (let j = 0; j <= currNumStr.length; j++) {
            if (j % 2 == 0) {
                //console.log(Number(currNumStr[j - 1]))
                evenSum += Number(currNumStr.charAt(j));
                //console.log(`even - ${j}`);
            } else {
                oddSum += Number(currNumStr.charAt(j));
                /* console.log(Number(currNumStr[j - 1]))
                console.log(`odd - ${j}`); */
            }
        }
        if (oddSum == evenSum) {
            printLine += currNumStr + " ";
        }
    }
    console.log(printLine);
}

function sumPrimeNonPrime(input) {
    let index = 0;
    let primeSum = 0;
    let nonPrimeSum = 0;
    while (input[index] !== undefined) {
        let command = input[index]; index++;
        let isNonPrime = false;
        if (command !== "stop") {
            let numCommand = Number(command);
            if (numCommand < 0) {
                console.log("Number is negative.");
            } else if (numCommand > 0) {
                for (let i = 2; i < numCommand; i++) {
                    if (numCommand % i === 0) {
                        isNonPrime = true;
                        break;
                    }
                }
                isNonPrime ? nonPrimeSum += numCommand : primeSum += numCommand
            }
        } else {
            break;
        }
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

function trainTheTrainers(input) {
    let index = 0;
    let judgesCount = Number(input[index]); index++;
    let command = input[index];
    let totalGradesScore = 0;
    let totalGradesCount = 0;
    while (command !== "Finish") {
        let subjectGradesCount = 0;
        let subjectGradesScore = 0;

        command = input[index]; index++;
        let subject = command;
        if (subject == "Finish") break;
        //console.log(subject);
        
        for (let i = index; i < index + judgesCount; i++) {
                if (input[i] === undefined) break;
                //console.log(`For loop els - ${input[i]}`);
                subjectGradesCount++;
                subjectGradesScore += Number(input[i]);
                totalGradesCount++;
                totalGradesScore += Number(input[i]);
                
        }
        console.log(`${subject} - ${(subjectGradesScore / subjectGradesCount).toFixed(2)}.`);
        index += judgesCount;
    }
    //console.log(totalGradesCount);
    //console.log(totalGradesScore)
    console.log(`Student's final assessment is ${(totalGradesScore / totalGradesCount).toFixed(2)}.`);
}

function specialNumbers(input) {
    let num = Number(input[0]);
    let printLine = "";
    for (let i = 1111; i <= 9999; i++) {
        let currNumStr = i.toString();
        let numsScore = 0;
        for (let j = 0; j <= currNumStr.length; j++) {
            if (num % Number(currNumStr.charAt(j)) === 0) {
                numsScore++;
            }
        }
        if (numsScore === 4) {
            printLine += `${currNumStr} `;
        }
    }
    console.log(printLine);
}

function cinemaTickets(input) {
    let totalTickets = 0;
    let kidsTickets = 0;
    let studentTickets = 0;
    let standartTickets = 0;

    let index = 0;

    while (input[index] !== undefined) {
        let ticketsForChecking = 0;
        let command = input[index]; index++;
        if (command === "Finish") break;
        let movie = command;
        command = input[index]; index++;
        let ticketsAvailable = command;
        command = input[index]; index++;
        let secCommand = command;
        if (secCommand === "kid") kidsTickets++
        else if (secCommand === "student") studentTickets++
        else if (secCommand === "standard") standartTickets++
        while (secCommand !== "End" || secCommand !== "Finish") {
            ticketsForChecking++;
            totalTickets++;
            if (ticketsForChecking >= ticketsAvailable) break;
            command = input[index];
            secCommand = command;
            index++;
            if (secCommand === "kid") kidsTickets++
            else if (secCommand === "student") studentTickets++
            else if (secCommand === "standard") standartTickets++
            else if (secCommand === "End" || secCommand === "Finish") break;
            //console.log(`while - ${secCommand}`);
        }
        console.log(`${movie} - ${((ticketsForChecking / ticketsAvailable) * 100).toFixed(2)}% full.`);
    }
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((studentTickets / totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standartTickets / totalTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidsTickets / totalTickets) * 100).toFixed(2)}% kids tickets.`);
}















