function getMaxSubSum(arr = [-1, 2, 3, -9]) {
	let maxSumm = 0, partialSumm = 0;
  
  for (let i = 0; i < arr.length; i++) {
  	partialSumm = partialSumm + arr[i];

    maxSumm = Math.max(maxSumm, partialSumm);
    
    if (partialSumm < 0) {
    	partialSumm = 0;
    }
  }
  
  return maxSumm;
}

console.log( getMaxSubSum([-1, 2, 3, -9]) );