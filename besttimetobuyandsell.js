export default function maxProfit(prices) {
   let  minprice=prices[0];
    let  maxprofit=0;
     for(let i=0;i<prices.length;i++){
        if(prices[i]-minprice>maxprofit){
            maxprofit=prices[i]-minprice;
        }
        if(minprice>prices[i]){
            minprice=prices[i];
        }
     }
     return maxprofit;
}

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));