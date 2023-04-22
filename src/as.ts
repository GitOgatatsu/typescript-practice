function getFirstFiveLetters(strOrNum: string | number) {
	const str111 = strOrNum as string;
	return str111.slice(0, 5);
}

console.log(getFirstFiveLetters("12345lakjflasj"));
console.log(getFirstFiveLetters("1234567"));
console.log(getFirstFiveLetters(String( 1234567 )));
