var num=prompt("eneter a number")

for(var i=2;i<num;i++){
    var flag=0
    if(num%i==0)
    flag=1
    break;  
}
if(flag==0){
    document.write("prime")
}
else{
    document.write(" not prime")
}