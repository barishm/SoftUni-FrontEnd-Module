function solve(n,n2){
    let temp = 1;
    let result = 0;
    if (n == 0 || n == 1){
      n = 1;
    }
    else if(n > 1){
      for(let i = n; i >= 1; i--){
        temp = temp * i;
      }
      n = temp;
    }
    temp = 1;
    if (n2 == 0 || n2 == 1){
        n2 = 1;
    }
    else if(n2 > 1){
        for(let i = n2; i >= 1; i--){
          temp = temp * i;
        }
        n2 = temp;
    }
    result = n/n2;
    console.log(result.toFixed(2));
}
solve(6,
    2);