let num=18;
let factor=0;

function check_Prime(num)
{
 for(let i=1;i<=num;i++){
   num>1 ?  num%i==0 ? factor++ : null :null; 
 }
    ;
}

check_Prime(num);