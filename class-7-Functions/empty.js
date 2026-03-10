//to verify given file is empty or not
let array=[];
if(array.length===0){
    console.log("Array is empty");
}else{
    console.log("Array is not empty");
}
//how to verrify given object is empty or not
let obj={};
if(Object.keys(obj).length>0){
    console.log("Object is not empty");
}else{
    console.log("Object is  empty");
}   
//print object in browser
let person={
    name:"Anjali",
    age:25, 
    city:"Bangalore"
}
console.log(person);


//To find object is empty or not using two methods
//object.keys() method
//JSON stringify() method