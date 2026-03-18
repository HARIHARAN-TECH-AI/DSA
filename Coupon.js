// const readline = require('readline')

// let rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// let result = [];

// rl.on("line",(line) => {
//     result.push(line)
// })

// rl.on("close", () => {
//  checkCoupon(3,30,10,[15,8,22,6])
// })

function checkCoupon(n, x, y, prices) {
        let originalTotal = 0;
        let discountedTotal = x;

        for (let i = 0; i < n; i++) {
            originalTotal += prices[i];

         
            let priceAfterDiscount = Math.max(0, prices[i] - y);
            discountedTotal += priceAfterDiscount;
        }

        if (discountedTotal < originalTotal) {
            console.log("COUPON");
        } else {
            console.log("NO COUPON");
        }
    }
checkCoupon(3,30,5,[50,60,50])