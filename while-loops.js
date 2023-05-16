function accountBalance(input) {
	let index = 0;
  	let total = 0;
  	while (input[index] != undefined) {
    	if (Number(input[index]) < 0) {
        	console.log("Invalid operation!");	
          	break;
        } else if (input[index] === "NoMoreMoney") {
        	break;
        } 
      	else {
        	total += Number(input[index]);
          	console.log(`Increase: ${Number(input[index]).toFixed(2)}`);
        }
      	index++;
    }
  	console.log(`Total: ${total.toFixed(2)}`);
}

function maxNum(input) {
    let index = 0;
    let arr = [];
    while (input[index] !== "Stop") {
        arr.push(Number(input[index]));
        index++;
    }
    console.log(Math.max(...arr));
}

function graduation(input) {
    let name = input[0];
    let excludedCount = 0;
    let index = 1;
    let arr = [];
    while (input[index] !== undefined) {
        if (Number(input[index]) < 4) {
            excludedCount += 1;
        } else {
            arr.push(Number(input[index]));
        }
        index++;
        if (excludedCount >= 2) {
            console.log(`${name} has been excluded at ${index - 2} grade`);
            return;
        }
    }
    let average = arr.reduce((a, b) => a + b, 0);
    average = (average / arr.length).toFixed(2);
    console.log(`${name} graduated. Average grade: ${average}`);
}

function oldBooks(input) {
    let index = 0;
    let booksSearchedCount = 0;
    let isFound = false;
    let book = input[index];
    index++;
    let searchingBook = input[index];
    while (input[index] != undefined) {
        searchingBook = input[index];
        index++;
        booksSearchedCount++;
        if (searchingBook === book) {
            isFound = true;
            break;
        }
        if (searchingBook === "No More Books") {
            break;
        }
    }
    isFound ?
    console.log(`You checked ${index - 2} books and found it.`)
    :
    console.log(`The book you search is not here! \nYou checked ${index - 2} books.`);
}

function examPreparation(input) {
    let index = 0;
    let badGradesCount = 0;
    let problemsCount = 0;
    let lastProblem;
    let totalGrades = [];
    let isFinished = false;
    let badGradesTotalCount = Number(input[index]);
    index++;

    while(input[index] !== "Enough") {
        let subject = input[index]; index++;
        let grade = Number(input[index]); index++;
        lastProblem = subject;
        totalGrades.push(grade);
        problemsCount++;
        if (grade <= 4) {
            badGradesCount++;
        }
        if (badGradesCount >= badGradesTotalCount) {
            isFinished = true;
            break;
        }
    }
    let avgScore = (totalGrades.reduce((a, b) => a + b, 0) / totalGrades.length).toFixed(2);
    isFinished !== true ?
    console.log(`Average score: ${avgScore}\nNumber of problems: ${problemsCount}\nLast problem: ${lastProblem}`)
    :
    console.log(`You need a break, ${badGradesCount} poor grades.`);
}

function vacation(input) {
    let index = 0;
    let neededMoney = Number(input[index]); index++;
    let currMoney = Number(input[index]); index++;
    let totalDays = 0;
    let spendingDays = 0;
    let isDoneMoney = false;
    while(input[index] != undefined) {
        let action = input[index]; index++;
        let money = Number(input[index]); index++;
        totalDays++;
        if (action == "spend") {
            currMoney -= money;
            spendingDays++;
        } else if (action == "save") {
            spendingDays = 0;
            currMoney += money;
        }
        if (currMoney < 0) currMoney = 0;
        if (currMoney >= neededMoney) {
            isDoneMoney = true;
            break;
        }
        if (spendingDays >= 5) {
            break;
        }
    } 
    isDoneMoney ?
    console.log(`You saved the money for ${totalDays} days.`)
    :
    console.log(`You can't save the money.\n${totalDays}`);
}

function walking(input) {
    let isReached = false;
    let steps = 0;
    let index = 0;
    let command = input[index];

    while(input[index] !== undefined) {
        let command = input[index]; index++;
        if (command !== "Going home") {
            steps += Number(command);
        } else if (command === "Going home") {
            command = input[index];
            steps += Number(command);
            if (steps >= 10000) {
                isReached = true;
                break;
            }
            break;
        }

        if (steps >= 10000) {
            isReached = true;
            break;
        }
    }
    //console.log(steps)
    isReached ?
    console.log(`Goal reached! Good job!\n${steps - 10000} steps over the goal!`)
    :
    console.log(`${10000 - steps} more steps to reach goal.`);
}

function coins(input) {
    let money = Number(input[0]);
    let twoLevasCount = 0;
    let oneLevCount = 0;
    let fiftyCount = 0;
    let twentyCount = 0;
    let tenCount = 0;
    let fiveCount = 0;
    let twoCount = 0;
    let oneCount = 0;
    //console.log(money);
    while (money > 0.001) {
        if (money >= 2) {
            money -= 2.00;
            money = money.toFixed(2);
            twoLevasCount += 1;
        } else if (money < 2 && money >= 1) {
            money -= 1.00;
            money = money.toFixed(2);
            oneLevCount += 1;
        } else if (money < 1 && money >= 0.5) {
            money -= 0.50;
            money = money.toFixed(2);
            fiftyCount += 1;
        } else if (money < 0.5 && money >= 0.2) {
            money -= 0.20;
            money = money.toFixed(2);
            twentyCount += 1;
        } else if (money < 0.2 && money >= 0.1) {
            money -= 0.10;
            money = money.toFixed(2);
            tenCount += 1;
        } else if (money < 0.1 && money >= 0.05) {
            money -= 0.05;
            money = money.toFixed(2);
            fiveCount += 1;
        } else if (money < 0.05 && money >= 0.02) {
            money -= 0.02;
            money = money.toFixed(2);
            twoCount += 1;
        } else if (money < 0.02 && money >= 0.01) {
            money -= 0.01;
            money = money.toFixed(2);
            oneCount += 1;
        }
        //console.log(money)
    }
    let totalCount = twoLevasCount + oneLevCount + fiftyCount + twentyCount + tenCount + fiveCount + twoCount + oneCount;
    console.log(totalCount)
}

function cake(input) {
    let index = 0;
    let length = Number(input[index]); index++;
    let width = Number(input[index]); index++;
    let cakeCount = length * width;
    while (input[index] != undefined && cakeCount > 0) {
        cakeCount -= Number(input[index]);
        index++;
        if (input[index] == "STOP") break;
    }
    cakeCount >= 0 ?
    console.log(`${cakeCount} pieces are left.`)
    :
    console.log(`No more cake left! You need ${cakeCount * -1} pieces more.`);
}

function moving(input) {
    let index = 0;
    let width = Number(input[index]); index++;
    let length = Number(input[index]); index++;
    let height = Number(input[index]); index++;
    let availableSpace = width * length * height;
    while(input[index] != undefined && availableSpace > 0) {
        availableSpace -= Number(input[index]); index++;
        if (input[index] === "Done") {
            break;
        }
    }
    availableSpace >= 0 ?
    console.log(`${availableSpace} Cubic meters left.`)
    :
    console.log(`No more free space! You need ${availableSpace * -1} Cubic meters more.`);
}























