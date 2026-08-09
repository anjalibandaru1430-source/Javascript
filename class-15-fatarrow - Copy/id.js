function identical(arr){
    let first=arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]!==first){
            return false
        }
    }
    return true
}
console.log(identical([1,1,1,1]))
