const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let result = [];

rl.on("line",(line) => {
    result.push(line)
})

rl.on("close",() => {
    main()
})

function main() {

    let [n,target] = result[0].split(" ").map(Number);
    let arr = result.slice(1).join(" ").split(" ").map(Number);
    let org = new Set();
    for(let num of arr) {
        let need = target-num
        if(org.has(need)) {
            console.log("YES");
            return;
        }
        org.add(num)
        
    }
                console.log("NO")

}
