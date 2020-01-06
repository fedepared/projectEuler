let esPalin=true;
let arr=[]
function palindromo(num){
    let reves=[];
    let i=0;
    for(let j=num.length-1;j>=0;j--){
        reves[i]=num[j];
        i++;
    }
    for(let k=0;k<num.length;k++){
        if(num[k]!=reves[k]){
            esPalin=false;
        }
    }
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

function multiplicar(arr){
    let j=999;
    for (let i = 999; i >= 200; i--) {
        let producto=i*j;
        arrayNumber(arr,producto);
        palindromo(arr);
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

multiplicar(arr);

