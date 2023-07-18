"use strict";

const wrapper = document.getElementById('wrapper');
const dial = document.createElement('div');
const pushedNumbers = [];
const codeSize = 3;
const code = [];


const getRandomInt = (min, max) =>
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}
  

dial.setAttribute('id', 'dial');
dial.style.padding = `5%`;
dial.style.backgroundColor = `black`;

const generateCode = (codeSize) =>
{
    for(let i = 0; i < codeSize; i++)
      code.push(getRandomInt(0,9));
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
    for(let i = 0; i < codeSize; i++)
    {
        if(enteredCode[i] !== code[i])
        {
            // console.log(`Test code => ${enteredCode[i]} --- ${code[i]} `);
            return false;            
        }
    }
    return true;    
    
}


const keepLastNumbers = (number) =>
{   
    if(pushedNumbers.length < codeSize)
    {
        pushedNumbers.push(number);
        console.log(`${code.join()} - ${pushedNumbers.join()}`);
        if(pushedNumbers.length === codeSize)
        {
            if(isCodeCorrect(pushedNumbers))
            {
                console.log("Tu as trouvé le code");
                exit;
            }
            else
            {
                // after a sequence of 3 numbers we delete 
                pushedNumbers.splice(0, codeSize);               
            }
        }
    }     
    // console.log(`${dialKey.getAttribute('data-id')} - ${code}`);
}

const createDialer = () =>
{
    for(let i = 0; i < 10; i++)
    {
        const dialKey = document.createElement('div');
        dialKey.innerText = `${i}`;    
        if(i === 0)
        {
            dialKey.style.order = `1`;
            dialKey.style.gridColumnStart = `2`;
        }
        // console.log(dialKey.textContent);
        dialKey.setAttribute('data-id', i);
        dialKey.addEventListener('click', () =>
            {
                keepLastNumbers(dialKey.getAttribute('data-id'));           
            }
        )
        dial.appendChild(dialKey);
    }
}

createDialer();
/* This version is beta */
wrapper.appendChild(dial);