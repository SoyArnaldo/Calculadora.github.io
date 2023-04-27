let num1=1;
let num2= 2;
let num3= 3;
let numMayor;
if(num2>num1 && num1<num2){
   numMayor=num2;
} if(num3>numMayor && numMayor<num3){
    numMayor=num3;
    console.log(numMayor);
}

let UNO= 8;
let DOS=15;
let TRES=40;
let Mayor;
function cualEsMayor(UNO,DOS,TRES){ 
    if(UNO<TRES){
        Mayor=TRES
       
    } if(TRES>UNO && TRES>DOS){
        Mayor=TRES;
    }
    return Mayor;
}    
    console.log(cualEsMayor(UNO,DOS,TRES));




