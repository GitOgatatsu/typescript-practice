type FooBar = {
	foo: string;
	bar: number;
};

type FooBarBaz = {
	foo: string;
	bar: number;
	baz: boolean;
};

const obj20: FooBarBaz = {
	foo: "hi",
	bar: 1,
	baz: false
};

const obj21: FooBar = obj20;

const obj30: FooBar = {
	foo: "hi",
	bar: 1
};

//const obj31: FooBarBaz = obj30;
