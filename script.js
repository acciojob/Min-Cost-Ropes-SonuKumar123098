function mincost(arr)
{ 
//write your code here
// return the min cost
  let sum=0;
	for(let i=0;i<arr.length;i++){
		if(arr.length<2) return sum;
		let first=100000; let second=100000;
		let ind1=0, ind2=1;
		for(let j in arr){
			if(first>arr[j]){
				first=arr[j];
				ind1=j;
			}
		}

		for(let j in arr){
			if(second>arr[j] && ind1!=j){
				second=arr[j];
				ind2=j;
			}
		}
		arr[ind2]=arr[ind1]+arr[ind2];
		sum+=arr[ind2];
		arr.splice(ind1,1);
	}
	return sum;
}

module.exports=mincost;
