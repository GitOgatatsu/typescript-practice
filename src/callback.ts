type User111 = {
	name: string,
	age: number
};

const getName = (u: User111): string => u.name;

const users111: User111[] = [
	{ name: "uhyo", age: 26 },
	{ name: "John Smith", age: 15 }
];

const names = users111.map(getName);
console.log(names);
