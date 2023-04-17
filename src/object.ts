//const input = null;
//const input = undefined;
const input: string = "おがわ";
const age: number = 59;
const age2: string = "age2";

const obj = {
	foo: 123,
	bar: "Hello, world!",
	name: input ? input : "名無し",
//	age: age,
	age,
	"name2": "ogawa2",
	123: "123",
	3.45: 3.45,
	[age2]: 60
};
console.log(obj.foo);
console.log(obj.bar);
console.log(obj.name);
console.log(obj.age);
console.log(obj.name2);
console.log(obj["123"]);
console.log(obj[123]);
console.log(obj["3.45"]);
console.log(obj[3.45]);
console.log(obj.age2);
