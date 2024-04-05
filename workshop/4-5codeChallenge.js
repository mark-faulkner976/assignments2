function findCommonElements(arr1, arr2) {
    // let common = []

    // let uniqueElements = {};

    // for (let element of arr1) {
    //     uniqueElements[element] = true;
    // }

    // // Iterate through arr2
    // for (let element of arr2) {
    //     // Check if the element exists in the unique elements object
    //     if (uniqueElements[element]) {
    //         // If it does, push it to the commonElements array
    //         common.push(element);
    //         // Remove the element from the unique elements object to avoid duplicates
    //         delete uniqueElements[element];
    //     }
    // }
    // return common

    // Convert arr1 to a Set for constant time lookup
    const set1 = new Set(arr1);

    console.log(set1)
    
    // Filter arr2 to keep only the elements that exist in set1
    const common = arr2.filter( element => set1.has(element) );

    if (common.length === 0) {
        return "no mathces"
    }

    return common
}

console.log(findCommonElements([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])); // Expected output: [3, 4, 5]
console.log(findCommonElements(["apple", "banana", "orange"], ["orange", "kiwi", "apple"])); // Expected output: ["apple", "orange"]
console.log(findCommonElements([true, false, true], [true, true, false])); // Expected output: [true, false]
console.log(findCommonElements([true, true, true], [false, false, false])); // Expected output: no matches