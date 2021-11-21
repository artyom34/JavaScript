'use strict';

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */
const renderTasks = (tasksList) => {
  // put your code here
	const listElem = document.querySelector('.list');

	const listItemElems = tasksList.sort((a, b) => a.done - b.done)
		.map(({ text , done }) => {
		const listItemElem = document.createElement('li'); 
		listItemElem.classList.add('list__item');
		if(done){
			listItemElem.classList.add('list__item_done');
		}

		const checkBoxItem = document.createElement('input');
		checkBoxItem.setAttribute('type', 'checkbox');
		checkBoxItem.checked = done;
		checkBoxItem.classList.add('list__item-checkbox');
		listItemElem.append(checkBoxItem, text);

		return listItemElem;
	});

	listElem.append(...listItemElems);
};

renderTasks(tasks);

