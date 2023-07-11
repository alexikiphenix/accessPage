"use strict";

const wrapper = document.getElementById('wrapper');
const dial = document.createElement('div');
const pushedNumbers = [];
const codeSize = 3;
const code = Math.floor(Math.random()*1000);

dial.setAttribute('id', 'dial');
dial.style.border = "1px solid black";
dial.style.backgroundColor = "#edf";

const keepLastNumbers = (number) =>{
    console.log(pushedNumbers);
    if(pushedNumbers.length < codeSize)
        pushedNumbers.push(number)
    else
    {
        if(pushedNumbers === code )
        {
            alert("Tu as trouvé le code")
            exit;
        }
        // after a sequence of 3 numbers we delete 
        else
            pushedNumbers.splice(0, codeSize);
    }        
}


for(let i = 0; i < 10; i++)
{
    const dialKey = document.createElement('div');
    dialKey.innerText = `${i}`;    
    if(i === 0)
    {
        dialKey.style.order = `1`;
        dialKey.style.gridColumnStart = `2`;
    }
    console.log(dialKey.textContent);
    dialKey.setAttribute('data-id', i);
    dialKey.addEventListener('click', () =>
        {
            keepLastNumbers(dialKey.getAttribute('data-id'));
            console.log(`${dialKey.getAttribute('data-id')} - ${code}`);
        }
    )
    dial.appendChild(dialKey);
}

/* This version is beta */

wrapper.appendChild(dial);