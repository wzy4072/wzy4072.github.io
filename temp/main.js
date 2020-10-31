
// 默认 借款周期利息产生利息

// 案例1 ===========================

var ll = 0.05;   // 年华利率 
var bj = 100000;     // 本金
var zq = 3; // 周期

// 还款方式1 // 三年后 一次还款
var total1 = bj
            +bj*ll
            + bj*ll + (bj*ll)*ll
            + bj*ll +(bj*ll + (bj*ll)*ll)*ll
console.log('还款方式1', total1)

// 还款方式2 // 每年末还利息 最后一次还本
var total2 = bj
            + bj*ll 
            + bj*ll
            + bj*ll
console.log('还款方式2', total2)

// 还款方式3 // 等分本金 利息渐少

var total3 = + bj*(1/3) + bj*ll 
             + bj*(1/3) + bj(2/3)*ll 
             + bj*(1/3) + bj(1/3)*ll
             
console.log('还款方式3', total3)





