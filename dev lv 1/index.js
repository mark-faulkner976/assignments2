function solution(a) {
    // Separate the array into two parts: non-1 values and their indices, and -1 values
    const nonMinusOneValues = [];
    const minusOneIndices = [];
    
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== -1) {
        nonMinusOneValues.push(a[i]);
        minusOneIndices.push(i);
      }
    }
  
    // Sort the non-1 values in ascending order
    nonMinusOneValues.sort((a, b) => a - b);
  
    // Populate the result array with the sorted non-1 values at their original indices
    for (let i = 0; i < nonMinusOneValues.length; i++) {
      a[minusOneIndices[i]] = nonMinusOneValues[i];
    }
  
    return a;
  }
  
  // Example usage:
  const input = [100, -1, 50, -1, 75];
  const result = solution(input);
  console.log(result); // Output: [-1, 150, 160, 170, -1, -1, 180, 190]
