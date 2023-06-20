//create a function that takes an array and selects the largest amongst them

function largest(a){
    let num = 0
    if (num >=0) {
        for (i = 0; i < a.length; i++){
        if (a[i] >= num){
            num = a[i];
        }
    }
    return num;
    } 
}

const arr = [-13, 40, 3, 0, 19, 22];
console.log(largest(arr))
// console.log(arr.sort((a, b) => a - b).pop());

/* Write a function that takes an array of words and a character and returns each word that has that character present.
1) check string for character
2) output it */

const string = ['sup', 'cuh?'];

function check(a, b) {
    for (let i = 0; i < a.length; i++){
        if (a[i].indexOf(b) > -1){
            console.log(a[i])
        }
    }
    
}
check(["yellow", "green", "^up^", "down", "dog"], "h")

/* Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.*/

function divisible(a, b) {
    if (a % b === 0) {
        console.log('true')
    }
    else {
        console.log('false')
    }
}

divisible(15, 4)

