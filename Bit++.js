const fs = require("fs");

let input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);
let index = 0;

let T = input[index++];

for (let t = 0; t < T; t++) {

    let N = input[index++];
    let even = 0;
    let odd = 0;

    for (let i = 0; i < N; i++) {
        let num = input[index++];

        if (num % 2 === 0) even++;
        else odd++;
    }

    let pairs = (even * (even - 1)) / 2 + (odd * (odd - 1)) / 2;

    console.log(pairs);
}