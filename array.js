let arr = [45, 12, 56, 67, 21];
//let val = arr[2]; // indexing
//let push = arr.push(2); // shows length
//console.log(push); // shows length
//console.log(arr); // [45, 12, 56, 67, 12, 2]
//let pop = arr.pop();
//console.log(arr);
//let shift = arr.shift();
//console.log(arr);
//let unshift = arr.unshift(3);
//console.log(arr);
let splice = arr.splice(2,0,"100","200");
console.log("splice",arr);
//let slice = arr.slice(1,3);
//console.log(slice);
//let reverse = arr.reverse();
//console.log(reverse);
//sort
// let sort = arr.sort(function(a,b){
//    return b-a;
// })
// console.log("sorting:",sort);
// // map
// let map = arr.map(function(val){
//     return val+5
// })
// console.log("mapping:",map);
// //filter
// let filter = arr.filter(function(val){
//     if (val > 15) return true;
// })
// console.log("filter:",filter);
// //Reduce
// let reduce = arr.reduce(function(a,b){
//     return a+b;
// })
// console.log("reduce:",reduce);
// //find
// let find = arr.find(function(val){
//     if (val===56) return true;
// })
// console.log("find:",find);
//some
// let some = arr.some(function(val){
//     return val>45;
// })
// console.log("some:",some);
//every
let every = arr.every(function(val){
    //return val > 5;
    return val > 500;
})
console.log("every:",every);


let newarr = [...arr];
console.log(newarr);

// Destructuring
let[a,b, ,c] = arr;
console.log("a:",a);
console.log("b:",b);
console.log("c",c);
//console.log("d",d);