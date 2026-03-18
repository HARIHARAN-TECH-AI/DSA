class Solution {
    compute(n, x, a, b) {
        
        let result = 0;
        
        for(let i=0; i<n; i++) {
            if(a[i]>=x) {
                let prev = 0;
                result += b[i]
            }
        }
        return result
        
    }
}

// 4
// 2 20
// 15 67
// 10 90
// 3 1
// 1 2 3
// 1 2 3
// 3 100
// 10 90 50
// 30 7 93
// 4 50
// 12 78 50 40
// 40 30 20 10

// 90
// 6
// 0
// 50