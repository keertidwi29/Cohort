//1. calculate Bmi
// function bmi(weight, height){
//     //let weight = 50;
//     //let height = 142;
//     const bmi_calculate = (weight/(height*height)).toFixed(2);
//     console.log(bmi_calculate,"bmi_calculate");
// }
// bmi(50, 1.7);
// bmi(45, 1.7);

//2. Discount calculator with higher order function
function discountcalculator(discount){
    return function(price){
      return discount = price - price * (discount/100);
      console.log("discount:",discount)
    }
}

let discounter = discountcalculator(10);
let caldiscounter = discounter(200);
console.log(caldiscounter);

//3. Counter
function counter(){
    count = 0;
    return function(){
       count++;
       return count;
    }
}
let c = counter();
let cc = c();
console.log(cc);

//4. Pure function
function double(val){
    return val*2;
}
console.log(double(15));

//5. IFEE we can use to create private variables
(function ifee(){
    let pwd = "secret pwd";
    console.log(pwd);
})();
console.log(pwd);

// hoisting: will be exist with function 
// but if function assign on variable than it's not 