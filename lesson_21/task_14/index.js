'use strict';
const eventsList = document.querySelector('.events-list');

const elemDiv  = document.querySelector('.rect_div');
const elemP = document.querySelector('.rect_p');
const elemSpan = document.querySelector('.rect_span');

function elemTarget(text, color){
	eventsList.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
}

const logGreyDiv = elemTarget.bind(null, 'DIV', 'grey');
const logGreyP = elemTarget.bind(null, 'P', 'grey');
const logGreySpan = elemTarget.bind(null, 'SPAN', 'grey');

const logGreenDiv = elemTarget.bind(null, 'DIV', 'green');
const logGreenP = elemTarget.bind(null, 'P', 'green');
const logGreenSpan = elemTarget.bind(null, 'SPAN', 'green');


const clearBtn = document.querySelector('.clear-btn');
const removeEvents = document.querySelector('.remove-handlers-btn');
const attachEvents = document.querySelector('.attach-handlers-btn');

attachEvents.addEventListener('click', logGreenDiv);
attachEvents.addEventListener('click', logGreyDiv, true);

attachEvents.addEventListener('click', logGreenP);
attachEvents.addEventListener('click', logGreyP, true);

attachEvents.addEventListener('click', logGreenSpan);
attachEvents.addEventListener('click', logGreySpan, true);


removeEvents.removeEventListener('click', logGreenDiv);
removeEvents.removeEventListener('click', logGreyDiv, true);

removeEvents.removeEventListener('click', logGreenP);
removeEvents.removeEventListener('click', logGreyP, true);

removeEvents.removeEventListener('click', logGreenSpan);
removeEvents.removeEventListener('click', logGreySpan, true);

clearBtn.addEventListener('click', () => {
	eventsList.innerHTML = '';
});








