"use strict";

const wrapper = document.getElementById('wrapper');
const dial = document.createElement('div');
const pushedNumbers = [];
const codeSize = 3;
const code = [];

dial.setAttribute('id', 'dial');
dial.style.border = "1px solid black";
dial.style.backgroundColor = "#edf";

const generateCode = (size) =>
{
    for(let i = 0; i < size; i++)
      code.push(Math.floor(Math.random()*10));

    console.log(code);
}

generateCode(codeSize);

/**
 * 
 * @param {Array} enteredCode 
 * @returns 
 */
const isCodeCorrect = (enteredCode) =>
{
    let codeIsSame = true;
    for(let i = 0; i < size; i++)
    {
        if(enteredCode[i] !== code[i])
            return false;
    }
    return true;    
}


const keepLastNumbers = (number) =>{   
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
        {
            pushedNumbers.splice(0, codeSize);
            pushedNumbers.push(number)
        }
    }        
    // console.log(`${dialKey.getAttribute('data-id')} - ${code}`);
    console.log(`${number} - ${code} - ${pushedNumbers}`);
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
        }
    )
    dial.appendChild(dialKey);
}

/* This version is beta */
wrapper.appendChild(dial);