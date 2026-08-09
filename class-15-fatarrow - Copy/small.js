//smallest num of a stringstring

let Smallest=(arr)=>{
    let Smallest=arr[0]
    for(let num of arr){
        if(num<Smallest){
            Smallest=num
        }
    }
    return Smallest;
}
console.log(Smallest([5,3,1]))