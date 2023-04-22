function map(array: number[], callback: (value: number) => number): number[] {
	const result: number[] = [];
	for (const elm of array) {
		result.push(callback(elm));
	}
	return result;
}

function map2<T>(array: T[], callback: (value: T) => T ): T[] {
	const result: T[] = [];
	for (const elm of array) {
		result.push(callback(elm));
	}
	return result;
}

function map3<T, U>(array: T[], callback: (value: T) => U): U[] {
	const result: U[] = [];
	for (const elm of array) {
		result.push(callback(elm));
	}
	return result;
}



const data111 = [1, 1, 2, 3, 5, 8, 13];

const result111 = map(data111, (x) => x * 10);
console.log(result111);

const result112 = map2(data111, (x) => x * 10);
console.log(result112);

const result113 = map3(data111, (x) => x * 10);
console.log(result113);
