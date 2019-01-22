
window.addEventListener('DOMContentLoaded', function () {
    
//CREATE HEADER//
let header = document.createElement('header');
let headerText = document.createTextNode('To Do List');

document.body.appendChild(header);

header.appendChild(headerText);

header.style.color = '#4682B4';
header.style.textTransform = 'uppercase';
header.style.textAlign = 'center';

//CREATE FORM//
let form = document.createElement('form');
document.body.appendChild(form);
form.setAttribute('id', 'form');

//CREATE INPUT//
let input = document.createElement('input');
input.setAttribute('id', 'input');
form.appendChild(input);

//CREATE BUTTON TO ADD ITEMS//
let button = document.createElement('button');
let btnText = document.createTextNode('Add Things');
button.type = 'button';
button.addEventListener("click", addThings); 
button.appendChild(btnText);
form.appendChild(button);

//CREATE BUTTON TO PRINT LIST//
let print = document.createElement('button');
let printText = document.createTextNode('Make a List');
print.type = 'button';
form.appendChild(print);
print.appendChild(printText);
print.addEventListener("click", makeList);

let list = [];
//FUNCTION PUSHING ITEMS INTO ARRAY 'LIST'//
function addThings() {
    document.getElementById('input').value;
    let things = document.getElementById('input').value;
    list.push(things);
    console.log(list);
};

let div = document.createElement('div')
div.setAttribute('id', 'div');
document.body.appendChild(div)

//FUNCTION FOR MAKE A LIST BUTTON//
function makeList() {
    for (i = 0; i < list.length; i++) {     
        document.getElementById('input').value
        document.getElementById('div').innerHTML = document.getElementById('div').innerHTML + '\n' + '- ' + list[i++];
        console.log(list[i]);
}};












});


