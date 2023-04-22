type Some<T> = {
	tag: "some";
	value: T;
};

type None = {
	tag: "none";
};

type Option2<T> = Some<T> | None;

function isSome3<T>(obj112: Option2<T>): obj112 is Option2<T> {
	return obj112.tag === "some";
}

function doubleOption(obj112: Option2<number>) {
	return mapOption(obj112, x => x * 2);
}

function mapOption<T, U>(obj112: Option2<T>, callback: (value: T) => U): Option2<U> {
	switch (obj112.tag) {
		case "some":
			return {
				tag: "some",
				value: callback(obj112.value)
			};
		case "none":
			return {
				tag: "none"
			}
	}
}



const five: Option2<number> = { tag: "some", value: 5 };
const nothing2: Option2<number> = { tag: "none" };

console.log(doubleOption(five));
console.log(doubleOption(nothing2));
