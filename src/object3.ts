const obj1 = {
	foo: 123,
	bar: 456,
	baz: 789
};

const obj2 = {
	//	foo: -99999,
	...obj1,
	foo: -99999
};

console.log(obj2);



const obj3 = {
	...obj1,
	...obj2
};

console.log(obj3);
