type Human200 = {
	height: number;
	weight: number;
};

const calcBMI = function(human: Human200): number {
	return human.weight / human.height ** 2;
};

const uhyo: Human200 = { height: 1.84, weight: 72 };

console.log(calcBMI(uhyo));

const calcBMI2 = function ({ height, weight }: Human200): number {
	return weight / height ** 2;
}
console.log(calcBMI2(uhyo));

const calcBMI3 = ({ height, weight }: Human200): number => {
	return weight / height ** 2;
};
console.log(calcBMI3(uhyo));
