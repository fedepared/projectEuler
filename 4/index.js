let esPalin=false;
let arr=[]
function palindromo(num,esPalin){
    let reves=[];
    let i=0;
    let derecho="";
    let alreves="";
    for(let j=num.length-1;j>=0;j--){
        reves[i]=num[j];
        i++;
        // console.log(reves);
    }
    for(let k=0;k<reves.length;k++){
        alreves += reves[k];
        
        derecho += num[k];
    }

    
    console.log(alreves);
    console.log(derecho);
    console.log(esPalin)
    if(derecho==alreves){
         return esPalin=true;
        //  console.log("es Palindromo")
    }
     else{
         return esPalin=false;
        //  console.log("No es Palindromo")
     }
    
    // // for(let k=0;k<num.length;k++){
    // //     if(num[k]!=reves[k]){
    // //         esPalin=false;
    // //     }
    // // }
}

function arrayNumber(arr,num){    
    let resto;
    while((num>10)!=0){
        resto=num%10;
        num=Math.trunc(num/10);
        arr.unshift(resto);
    }
    arr.unshift(num);
}

function multiplicar(arr,esPalin){
    let max=-1;
    for (let i = 999; i <= 100; i--) {
        for (let j = 999; j <= 100; j--) {
            let producto=i*j;
            if(max<p && palindromo(produto)){
                max=p;
            }
        }
        
        arrayNumber(arr,producto);
        palindromo(arr,esPalin);
        console.log(i,j,arr,esPalin);

        if(j>i){
            j--;
            i++;
        }
        if(esPalin==false){
            arr=[];
        }
        else{
            break;
        }

    }
}

multiplicar(arr,esPalin)

