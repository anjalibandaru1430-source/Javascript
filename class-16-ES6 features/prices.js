let prices=[98,198,298,398]
//create new array by adding +1 for every price value
let new_prices=[]
let i=0;
while(i<=prices.length-1){
    new_prices.push(prices[i]+1)
    i++;
}

console.log(new_prices)