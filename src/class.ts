class User333 {
	readonly #name: string;
	readonly #age: number;

	constructor(name: string, age: number) {
		if (name === "") {
			throw new Error("名前は空にできません！");
		}
		this.#name = name;
		this.#age = age;
	}

	getMessage(message: string): string {
		return `${this.#name} (${this.#age}) 「${message}」`
	}
}

const uhyo2 = new User333("uhyo", 26);
console.log(uhyo2.getMessage( "こんにちは" ) );
