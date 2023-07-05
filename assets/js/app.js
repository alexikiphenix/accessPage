"use strict";

const wrapper = document.getElementById('wrapper');
const dial = document.createElement('div');

dial.setAttribute('id', 'dial');
dial.style.border = "1px solid black";
dial.style.backgroundColor = "#edf";

for(let i = 0; i < 10; i++)
{
    const dialKey = document.createElement('div');
}


wrapper.appendChild(dial);