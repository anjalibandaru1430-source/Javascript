var products=[]
async function getData(){
    let response=await fetch("https://dummyjson.com/products");
    let P_Data=await response.json();
    console.log(P_Data);
    

}


function displayData(){

}