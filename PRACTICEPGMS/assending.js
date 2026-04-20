let a=10,b=20,c=15
let temp;
 if(a>b) {
    temp=a;
    a=b;
    b=temp;
 }
 if(a>c) {
    temp=a;
    a=c;
    c=temp;
 }
 if(b>c) {
    temp=b;
    b=c;    
    c=temp;
 }
 console.log(a,b,c);