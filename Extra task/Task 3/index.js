function substrSum(arr) {
    let sum = 0; 
    for (let i = 0; i < arr.length; i++) {
      
      let sumStart = 0;
      for (let j = i; j < arr.length; j++) {
        sumStart += arr[j];
        sum = Math.max(sum, sumStart);
      }
    }
  
    return sum;
  }

  console.log(substrSum([-1, 23, 19, -7]));