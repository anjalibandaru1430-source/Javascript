let numbers=[11,8,31,18,1055,232]
//collect all even numbers
//without filter
/*let even=[]
for(let num of numbers){

    if(num%2===0){
        even.push(num);
    }
} 
console.log(even);*/

//using filter
let evens=numbers.filter(num=>num%2===0)
console.log(evens)