let lab1 = [5, 5, 0, 0, 5, 0, 10];
let lab2 = [5, 5, 5, 5, 5, 5, 10];
let lab3 = [5, 10, 10, 15];
let lab4_5 = [5, 5, 5, 5, 5, 5, 8, 10, 10, 10, 3];
let lab6 = [0, 0, 0, 0, 0, 0];
let lab8=[5,10,10,10,5];
let quiz1 = [34];



function get_sum(lab) {
    let sum = 0;
    for (let i = 0; i < lab.length; i++) {
    sum += lab[i];
    }
    return sum;
}


function main(lab1, lab2, lab3, lab4_5, lab6, lab8) {
    sum1 = get_sum(lab1);
    sum2 = get_sum(lab2);
    sum3 = get_sum(lab3);
    sum4_5 = get_sum(lab4_5);
    sum6 = get_sum(lab6);
    sum8 = get_sum(lab8);
    total_score = ((sum1 + sum2 + sum3 + sum4_5 + sum6 + sum8)/7 * 24/40) + (quiz1 * 16/40);
    sums = [sum1, sum2, sum3, sum4_5, sum6, sum8];
    const obj={
        lab1: lab1,
        lab2: lab2,
        lab3: lab3,
        lab4_5: lab4_5,
        lab6: lab6,
        lab8: lab8,
        quiz1: quiz1,
        sums : sums,
        total_score: total_score,
      }
    return obj;
    }
  
let results= main(lab1,lab2,lab3,lab4_5,lab6,lab8);
console.log(results);
