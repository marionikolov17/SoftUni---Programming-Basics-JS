function fishTank(input) {
	let volume = Number(input[0]) * Number(input[1]) * Number(input[2]);
  	console.log((volume / 1000) * (1 - (Number(input[2]) / 100)));
}
repainting(["10 ","11 ","4 ","8 "]);