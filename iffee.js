let Bank = (function(){
    let Bankbalance = 12000; // bankbalnce can't access outside
     console.log(Bankbalance,"Balance"); // access here

    function checkbalance(){
        console.log(Bankbalance);
    }

    function setbalance(val){
        console.log(val);
    }

    function deposit(val){
         Bankbalance += val;
        console.log(Bankbalance);
    }

    function withdraw(val){
        if(val<=Bankbalance){ 
            Bankbalance -= val;
            console.log(Bankbalance);
        }else{
            console.log("Balance is exceed");
        }
    }
    return {
        //Bankbalance,
        checkbalance,
        setbalance,
        deposit,
        withdraw,
    };
})();
setTimeout(Bank.checkbalance.bind(Bank), 3000);
Bank.checkbalance();
//Bank.withdraw(5000);
Bank.deposit(8000);

//console.log(Bankbalance,"Balance"); // can't access here
//Bank.setbalance(2000);
