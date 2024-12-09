import { calculate } from '/calculator.js';

let previous=''
let output=''
let master=''

const ul = document.querySelector('#output');
const secondChild = ul.children[1];
const firstChild = ul.children[0];
firstChild.innerText=previous
secondChild.innerText=output

const btns = document.querySelectorAll('.button'); // Select all elements with the class "button"
btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        master+=e.target.textContent
        output+=e.target.textContent
        secondChild.innerText=output // Log the text of the clicked button
    });
});
const opbtns = document.querySelectorAll('.opbutton'); // Select all elements with the class "button"

opbtns.forEach(opbtn => {
    opbtn.addEventListener('click', (e) => {
      if(previous==''){
        if(e.target.textContent=='='){
          firstChild.innerText=''
          secondChild.innerText=output
          return
        }
        previous=output
        previous+=e.target.textContent
        master+=e.target.textContent
        output=''
        firstChild.innerText=previous
        secondChild.innerText=output
        return
      }
      if(e.target.textContent!='=' && previous!=''){
        firstChild.innerText=''
        secondChild.innerText='ERROR'
        previous=''
        output=''
        master=''
        return
      }
      if(e.target.textContent=='='){
        secondChild.innerText=calculate(master)
        firstChild.innerText=''
        previous=''
        output=''
        master=''
        return
      }
    });
});

const acbtns = document.querySelectorAll('#accontainer'); // Select all elements with the class "button"

acbtns.forEach(acbtn => {
    acbtn.addEventListener('click', (e) => {
      if(e.target.textContent=='AC'){
        firstChild.innerText=''
        secondChild.innerText=''
        previous=''
        output=''
        master=''
      }
      if(e.target.textContent=='DEL'){
        if(output.length>0){
          output = output.slice(0, -1);
          master = master.slice(0, -1);
        }
        firstChild.innerText=previous
        secondChild.innerText=output
      }
    });
});