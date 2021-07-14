 var num=153;
 var temp=num;
var res=0;
while(temp!=0){//153!=0->TRUE,15!=0=>T,1!=0=>T,0!=0=>FALSE
   let remainder=temp%10  //153%10=3(to get the last digit of the number),REMAINDER= 15%10=5,remainder=1%10=1
    res=res+remainder**3;//0+3*3*3=27,RES=27+5*5*5=152,res=152+1*1*1=153
    temp=Math.floor(temp/10)//to remove last digit of the number,num=15,NUM=15/10=1,num=1/10=0

}
if(num==res){//153==153
    console.log(`${res} IS AN ARMSTRONG NUMBER`);
}
else{
    console.log(`${res} IS NOT AN ARMSTRONG NUMBER`);
}