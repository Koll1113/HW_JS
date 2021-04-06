// 1
for (let i = 1; i <= 10; i++) {
    if(i == 6) {
        console.log('FizFiz')
    }else if(i % 3 == 0) {
        console.log('FizBuz');
    } else if(i % 2 == 0) {
        console.log('Fiz');
    } else if(i % 2 !== 0) {
        console.log('Buz');
    }
}
//2
n = 10;
for (j = 1; n >= 1; --n) {
    j*=n
} console.log(j)

let a = 10*9*8*7*6*5*4*3*2*1;
console.log(a)
//3
const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;
const eightWeeks = consumptionPerWeek * weeksAmount / sheetsInReamPaper;
if(eightWeeks % 1 !=0) {
console.log(20)
}
