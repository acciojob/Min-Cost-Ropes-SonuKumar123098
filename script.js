function mincost(arr)
{ 
//write your code here
// return the min cost
  let totalCost=0;
	
	while(arr.length>=2){
		arr.sort((a,b)=> a-b)
		let cost=arr[0]+arr[1];
		arr.shift();
		arr.shift();
		arr.push(cost);
		totalCost+=cost;
	}
	return totalCost;
}

module.exports=mincost;
