'use strict';
const eventsList = document.querySelector('.events-list');

const rect = document.querySelector('.rect');
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



elemDiv.addEventListener('click', logGreenDiv);
elemP.addEventListener('click', logGreenP);
elemSpan.addEventListener('click', logGreenSpan);

elemDiv.addEventListener('click', logGreyDiv, true);
elemP.addEventListener('click', logGreyP, true);
elemSpan.addEventListener('click', logGreySpan, true);

const clearBtn = document.querySelector('.clear-btn');

clearBtn.addEventListener('click', () => {
	eventsList.innerHTML = '';
});









