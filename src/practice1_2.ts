type User101 = {
	name: string;
	age: number;
	premUser: boolean;
};

const data2: string = `
uhyo,26,1
John Smith, 17,0
Mary sue,14,1
`;

const users2: User101[]  = data2.split("\n")
	.filter(line => line !== "")
	.map(line => {
		const [name, ageString, premUserString] = line.split(",");
		return {
			name,
			age: Number(ageString),
			premUser: premUserString === "1"
		};
	});


for (const user of users2) {
	if (user.premUser) {
		console.log(`${user.name} (${user.age})はプレミアムユーザです。`);
	} else {
		console.log(`${user.name} (${user.age})はプレミアムユーザではありません。`);
	}
}
