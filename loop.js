// for(i=1; i<=10; i++){
//     console.log(i);
// }

//10 to 1 print the numbers using while
// let i=10;
// while (i>=1){
//     --i;
//     console.log(i);
// }

//print even numbers 1 to 20 using for loop
// for(i=0; i<=20; i++){
//     if(i%2===0)
//     console.log(i);
// }

//print odd numbers 1 to 15 using while loop
// let i = 1;

// while (i <= 15) {
//   console.log(i);
//   i += 2;
// }

// print table of 15
// let i = 1;
// while (i <= 10) {
//   console.log(`${5 * i}`);
//   i++;
// }

// sum of 1 to 100
// let n=10000;
// let sum = (n*(n+1))/2;
// console.log(sum);

// 1 to 50 number thats divisble by 3
// let i = 1;
// for(i=1; i<=50; i++){
//     if(i%3==0){
//         console.log(i);
//     }
// }

//expect 1,3,5,7,9
let counter = 0;
for(i=0; i<=101; i++){
    if(i%2 === 1){
        counter++;
        console.log(i);
    }
    if(counter === 5){
        break;
    }
}