let arrBool=[];
let arrDiv=[]



for (let l = 0; l < 18; l++) {
        arrDiv[l]=l+2;
}

// for (let i = 19; i < 11700000; i++) {
//     let a=20*i;
//     let contFalse=0;
//     let contTrue=0;
//     for (let k = 0; k < arrDiv.length; k++) {
//         if(a%(arrDiv[k])==0){
//             arrBool[k]=false;
//             contTrue++;
//         }        
//         else{
//             contFalse++;
//         }
//     }


    
//     if(contTrue==18){
//         console.log("Numero: ",a);
//     }
    
// }

    let i=19;
    let bandera=true;
    let contFalse=0;
    let contTrue=0;
    while(contFalse!=18){
        let a=20*i;
        for (let k = 0; k < arrDiv.length; k++) {
             if(a%(arrDiv[k])==0){
                 arrBool[k]=false;
                 contTrue++;
             }        
             else{
                 contFalse++;
             }
            }
        if(contTrue==18){
            console.log("Numero: ",a);
            bandera=false;
            break;
        }
        i++;
        contFalse=0;
        contTrue=0;
        
    }



