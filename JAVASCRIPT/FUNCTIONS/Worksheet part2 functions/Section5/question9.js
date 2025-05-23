(function(num){
    let result =1;
    for(let i=2;i<=num;i++){
        result *=i;
    }
    console.log(`factorial of $(num) is ${result}`);
})(5)