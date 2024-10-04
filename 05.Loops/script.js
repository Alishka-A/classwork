let test = "Code Academy CS305";
let city = "Baku";
let country = "Azerbaijan";

for (text of test) {
    console.log(text);
}

let a = city.concat(" " + country);
console.log(a);

console.log(test.split(" "));

console.log(test.split(""));

console.log(country.indexOf("a"));

console.log(country.lastIndexOf("a"));

let b = "";
for (let c of country) {
    b += c;
}

if (test.includes("CS")) {
    console.log("success");
} else {
    console.log("fail");
}

let list = [];

for (i = 0; i <= 20; i++) {
    list.push(i);
}

console.log("list", list);