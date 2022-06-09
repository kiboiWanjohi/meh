const btn = document.getElementById('btn');
const hexValue = document.getElementById('color');
const body = document.querySelector('body');
const hex = [1,2,3,4,5,6,7,8,9,'A', 'B', 'C', 'D', 'E', 'F'];

body.style.backgroundColor = '#000000';
hexValue.innerHTML = '#000000';
btn.addEventListener('click', function(){
    hexKey = '#';
    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() *  hex.length);
        hexKey = hexKey + hex[index];
    }
    hexValue.innerHTML = hexKey;
    body.style.backgroundColor = hexKey;
    body.style.transition = '2s';
})