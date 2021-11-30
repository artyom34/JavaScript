'use strict';
const eventsList = document.querySelector('.events-list');
const clearBtn = document.querySelector('.clear-btn');
const removeEvents = document.querySelector('.remove-handlers-btn');
const attachEvents = document.querySelector('.attach-handlers-btn');


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

attachEvents.addEventListener('click', () => {
	elemDiv.addEventListener('click', logGreyDiv, true);
	elemDiv.addEventListener('click', logGreenDiv);

	elemP.addEventListener('click', logGreyP, true);
	elemP.addEventListener('click', logGreenP);

	elemSpan.addEventListener('click', logGreenSpan);
	elemSpan.addEventListener('click', logGreySpan, true);
});

removeEvents.addEventListener('click', () => {
	elemDiv.removeEventListener('click', logGreyDiv, true);
	elemDiv.removeEventListener('click', logGreenDiv);

	elemP.removeEventListener('click', logGreyP, true);
	elemP.removeEventListener('click', logGreenP);

	elemSpan.removeEventListener('click', logGreySpan, true);
	elemSpan.removeEventListener('click', logGreenSpan);
});

clearBtn.addEventListener('click', () => {
	eventsList.innerHTML = '';
});











