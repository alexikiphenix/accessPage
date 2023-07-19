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


const createDialer = () =>
{
    const smallScreen = document.createElement('div');
    smallScreen.classList.add('smallScreen');
    dial.appendChild(smallScreen);
    
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
            keepLastNumbers(parseInt(dialKey.getAttribute('data-id')));           
        }
        )
        dial.appendChild(dialKey);
    }
}
createDialer();

const generateCode = (codeSize) =>
{
    for(let i = 0; i < codeSize; i++)
    code.push(getRandomInt(0,9));
    console.log(code);
}

generateCode(codeSize);

const goToWinPage = () =>
{
    location.assign('https://www.wikipedia.org');
}

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

const checkValueAndPos = (array = []) => 
{
    if(array.length <= code.length)
    {
        for(let i = 0; i < array.length; i++)
        {            
            console.log('Test');
        }
    }
}

const keepLastNumbers = (number) =>
{   
    if(pushedNumbers.length < codeSize)
    {
        pushedNumbers.push(number);
        console.log(`${code.join()} - ${pushedNumbers.join()}`);
        if(pushedNumbers.length === codeSize)
        {
            console.log(`3 CHIFFRES ${code[0]}${code[1]}${code[2]} ${pushedNumbers[0]}${pushedNumbers[1]}${pushedNumbers[2]}`);            
            if(isCodeCorrect(pushedNumbers))
            {
                alert("Tu as trouvé le code");
                document.title = "redirection...";
                setTimeout(goToWinPage, 5000);                            
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


/* This version is beta */
wrapper.appendChild(dial);