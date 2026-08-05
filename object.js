let obj = {
    name : "keerti",
    age : 26,
    education : "B.tech",
    edu : {
        branch : "CS"
    }
}
let branch = "EC";
//obj.edu.branch = branch;

//console.log(obj.name);
//console.log(obj["name"]);

//let newobj = {...obj}

let newobj = JSON.parse(JSON.stringify(obj));
newobj.edu.branch = branch;

console.log(newobj);
console.log(obj);