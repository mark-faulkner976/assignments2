var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"


function forception(people, alphabet){
    const alphabetArray = alphabet.split('')
    for (i = 0; i < people.length; i++){
        console.log(people[i])
        for (j = 0; j < alphabetArray.length; j++){
            console.log(alphabetArray[j])
        }
    }
    
}

console.log(forception(people, alphabet))

/*
convert string to array
for every part of people, go through alphabet


*/