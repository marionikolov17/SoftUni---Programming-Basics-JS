function energyBooster(input) {
    let data = {
        "Watermelon": { small: 2 * 56, big: 5 * 28.70 },
        "Mango": { small: 2 * 36.66, big: 5 * 19.60 },
        "Pineapple": { small: 2 * 42.10, big: 5 * 24.80 },
        "Raspberry": { small: 2 * 20, big: 5 * 15.20 }
    };
    let price = data[input[0]][input[1]] * Number(input[2]);
    if (price < 400) {
        console.log(`${price.toFixed(2)} lv.`);
    } else if (price >= 400 && price <= 1000) {
        price = price - (price * 0.15);
        console.log(`${price.toFixed(2)} lv.`);
    } else {
        price = price - (price * 0.5);
        console.log(`${price.toFixed(2)} lv.`);
    }
}

energyBooster(["Pineapple",
"small",
"1"])






