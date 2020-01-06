let cont=0;
let esPrim=true;
let j=2;
for (j; cont<107; j++) {
    for(let i=2;i<j;i++){
        if(j%i==0){
            esPrim= false;
            break;
        }
    }
    if(esPrim==true){
        cont++;
    }

    console.log("Numero: ",j);
    console.log("esPrim: ",esPrim);
    console.log(" ")

    esPrim=true;
    
}

console.log(j);




