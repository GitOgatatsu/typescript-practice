type User10<T> = {
	name: string;
	child: T;
};

type Family10<Parent, Child> = {
	mother: Parent;
	father: Parent;
	child: Child;
};

const obj40: Family10<number, string> = {
	mother: 0,
	father: 100,
	child: "1000"
};
