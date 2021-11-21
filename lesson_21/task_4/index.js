'use strict';

export function getTitle(){
	const elementTitle = document.querySelector('.title').textContent;

	return elementTitle;
}

export function getDescription(){
	const elementAbout = document.querySelector('.about').innerText;

	return elementAbout;
}

export function getPlans(){
	const elementPlan = document.querySelector('.plans').innerHTML;

	return elementPlan;
}

export function getGoal(){
	const elementGoal = document.querySelector('.goal').outerHTML;

	return elementGoal;
}
