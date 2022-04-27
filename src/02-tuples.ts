const prices: (number | string)[] = [1,3,2,2,2, "as"];
prices.push(1);
prices.push("1");

let user: [string, number, boolean];
// user = ["franzft", 15];
// user = ["12", 15];

// user = [];
// user = ["franz"];
// user = ["franz", 12];
user = ["franz", 12, true];
const [username, age] = user;
console.log(username);
console.log(age);
