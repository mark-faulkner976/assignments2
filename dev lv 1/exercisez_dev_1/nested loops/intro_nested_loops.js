var arrayOfArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for (var i = 0; i < arrayOfArrays.length; i++){ //how many times will this loop run? 3, correct!
    for (var j = 0; j < arrayOfArrays[i].length; j++){ //how many times will this loop run? 9, correct!
        console.log( arrayOfArrays[i][j] )
    }
}
/* brackets being side by side, is like saying grab the array of an array, j of i
numerically j goes 0-2 everytime i goes up by one. [0][0], [0][1], etc
how would i console log #6?
    console.log(arrayOfArrays[1][2]), correct!
how about #1?
    console.log(arrayOfArrays[0][0]), correct!
how about #9?
    console.log(arrayOfArrays[2][2])
arrays of arrays are known as a matrix or a grid, correct!
*/