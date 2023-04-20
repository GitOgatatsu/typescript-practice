type User100 = {
	name: string;
	age: number;
	premUser: boolean;
};

const data: string = `
uhyo,26,1
John Smith, 17,0
Mary sue,14,1
`;

const users: User100[] = [];
const lines = data.split("\n");
console.log(lines);
for (const line of lines) {
	if (line === "") {
		continue;
	}
	const [name, ageString, premUserString] = line.split(",");
	const age = Number(ageString);
	const premUser = premUserString === "1";
	users.push({
		name,
		age,
		premUser
	});
}



for (const user of users) {
	if (user.premUser) {
		console.log(`${user.name} (${user.age})はプレミアムユーザです。`);
	} else {
		console.log(`${user.name} (${user.age})はプレミアムユーザではありません。`);
	}
}
