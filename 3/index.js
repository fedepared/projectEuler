let res=600851475143;
let esPrim=true;

function esPrimo(n){
    for(let i=2;i<n;i++){
        if(n%i==0){
            esPrim= false;
        }
    }
    
}

for(let j=2;j<res;j++){
    //busco divisores
    if(res%j==0 && esPrim){
        res=res/j;
    }
}
console.log(res);
