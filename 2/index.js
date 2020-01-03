let uno=1;
let dos=2;
let fibo=0;
let suma=0;

console.log(uno);
console.log(dos);
for(let i=0;i<30;i++){
    fibo=uno+dos;
    console.log(fibo);
    if(fibo%2==0){
        suma+=fibo;
    }
    uno=dos;
    dos=fibo;
}

console.log("La suma es:"+(suma+2));