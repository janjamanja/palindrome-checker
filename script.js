/* file: script.js */
const input = document.getElementById('text-input');
const button = document.getElementById('check-btn');
const result = document.getElementById('result');

const checkPalindrome = () => {

const valueWord = input.value;

const regEx = /[^A-Za-z0-9]/gi;

const newWord = valueWord
.toLowerCase()
.replace(regEx,  '')

const reverseWord =
newWord
.split('')
.reverse()
.join('')

if(input.value === ''){
    return alert('Please input a value');
}

const resultWord = newWord === reverseWord  ?  `<p>${input.value} is a palindrome</p>`  :  `<p>${input.value} is not a palindrome</p>`;

result.innerHTML= resultWord;
}

button.addEventListener('click',  checkPalindrome)