const arr = [1, 10, 100];

for (const elm of arr) {
	console.log(elm);
}

for (let elm of arr) {
	elm *= 10;
	console.log(elm);
}
