type Option<T> = {
	tag: "some";
	value: T;
} | {
	tag: "none";
};

function showNumberIfExists(obj111: Option<number>): void {
	if (obj111.tag === "some") {
		console.log(obj111.value);
	}
	if (isSome(obj111)) {
		console.log(true);
	}
	if (isSome2(obj111)) {
		console.log("OK!");
	}

}

function isSome<T>(obj111: Option<T>): obj111 is { tag: "some", value: T } {
	return obj111.tag === "some";
}

function isSome2<T>(obj111: Option<T>): obj111 is Extract<Option<T>, { tag: "some" }> {
	return obj111.tag === "some";
}



const four: Option<number> = {
	tag: "some",
	value: 4
};

const nothing: Option<number> = {
	tag: "none"
};

showNumberIfExists(four);
showNumberIfExists(nothing);
