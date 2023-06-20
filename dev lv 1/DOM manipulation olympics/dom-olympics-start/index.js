// qualifier
var h1 = document.createElement('h1');
var h3 = document.createElement('h3');
var h4 = document.createElement('h4');
var java = document.createTextNode('JavaScript Made This!!');

h1.append(java);
h3.insertAdjacentHTML('beforeend',`<span style="color: tan"> Mark Faulkner</code>`,
);
h3.insertAdjacentText('beforeend', ' wrote the JavaScript');
document.getElementsByTagName('header')[0].append(h1);
document.getElementsByTagName('header')[0].append(h3);

//bronze
const textArea = document.getElementsByClassName('message')
// console.log(textArea)

for (var i = 0; i < textArea.length; i++) {
    var trial = ['Thinking about him again?', 'Thinking about who??', 'Gregor Samsa', 'Yea :)']
    // console.log(textArea[i])
    // console.log(trial[i])
    textArea[i].textContent = trial[i]
}

document.getElementById('clear-button').addEventListener('click', function clear(){
    for (var i = 0; i < textArea.length; i++) {
        textArea[i].textContent = ''
        }
});

//silver
const rightMessagesColor = document.getElementsByClassName('message right')
const leftMessagesColor = document.getElementsByClassName('message left')
var colors = document.getElementById('theme-drop-down');


colors.addEventListener('click' , () => {
    if (colors.value === 'theme-two') {
        for (var i = 0; i < textArea.length; i++) {
            rightMessagesColor[i].style.backgroundColor = 'crimson'
            leftMessagesColor[i].style.backgroundColor = 'black'
            leftMessagesColor[i].style.color = 'white'
            rightMessagesColor[i].style.color = 'white'
        }}
        else {
            for (var i = 0; i < textArea.length; i++) {
                rightMessagesColor[i].style.backgroundColor = 'lightblue'
                leftMessagesColor[i].style.backgroundColor = 'burlywood'
                leftMessagesColor[i].style.color = 'black'
                rightMessagesColor[i].style.color = 'black'
            }
        }
})


// gold

const form = document['message']
form.addEventListener('submit', function(event){
    event.preventDefault()

    const input = document.getElementById('input').value    
    document.getElementById('input').value = ''
    // console.log(input)
    const output1 = document.createElement('div')
    const output2 = document.createElement('div')
    
    if (textArea.length % 2 === 0) {
        output1.setAttribute('class', 'message left')
        output1.innerHTML = input
        document.getElementsByClassName('messages')[0].append(output1)
        console.log(output1.innerHTML)
            
    } else if(textArea.length % 2 === 1) {
        output2.setAttribute('class', 'message right')
        output2.innerHTML = input
        document.getElementsByClassName('messages')[0].append(output2)
        console.log(output2.innerHTML)
    }
})