// function solution(arr) {
//     // sorts the array of pos nums
//     let filtered = arr.filter( num => num > 0).sort();

//     // stores the sorted array
//     let sorted = [];

//     // keeps track of the pos sorted array list
//     let j = 0;

//     for ( let i = 0; i< arr.length; i++ ) {
//         // if num is + replace it with first num
//         if ( arr[i] > 0 ) {
//             sorted.push( filtered[j++] )
//         } else {
//             // else push neg nums to arr at same location
//             sorted.push( arr[i] )
//         }
//     }

//     return sorted
// }

function solution( arr ) {
    const posList = []
    const negList = []
    
    //break arr into pos and neg
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i] >= 0 ) {
            // console.log("test")
            posList.push( arr[i] )
        } else {
            negList.push( arr[i] )
        }
    }
    
    // sort posArr
    posList.sort( ( a, b ) => a - b )
    
    // new vars for solution
    const sortedArray = []
    let posIndex = 0;
    let negIndex = 0;


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            sortedArray.push(posList[posIndex]);
            posIndex++;
        } else {
            sortedArray.push(negList[negIndex]);
            negIndex++;
        }
    }


    return sortedArray

}


console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))
console.log(solution([5, 3, 1]))
console.log(solution([-1, -1, -1, -1]))
console.log(solution([100, -1, 50, -1, 75]))