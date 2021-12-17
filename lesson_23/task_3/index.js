let tasks = [
  {id: 1, text: 'Buy milk', done: false },
  {id: 2, text: 'Pick up Tom from airport', done: false },
  {id: 3, text: 'Visit party', done: false },
  {id: 4, text: 'Visit doctor', done: true },
  {id: 5, text: 'Buy meat', done: true },
];


const listElem = document.querySelector('.list');

const renderTasks = (tasksList) => {

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({id, text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
			checkbox.dataset.id = id;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);
// put your code here


const addNewTodo = () =>{
	const textTodo = document.querySelector('.task-input');
	if(textTodo.value == '') { 
		return ;
	}

	listElem.innerHTML = '';
	tasks.push({id: tasks.length + 1, text: textTodo.value, done: false});
	textTodo.value = '';

	renderTasks(tasks);	
	console.log(tasks);
};

const isChecked = event => {
	const dataId = +event.target.dataset.id;
	const isCheckbox = event.target.classList.contains('list__item-checkbox');

	if(!isCheckbox){
		return;
	};

	tasks.map(elem => {
		if(elem.id == dataId){
			elem.done = true;
		}
	});

	listElem.innerHTML = '';
	renderTasks(tasks);
};

const createTaskBtn = document.querySelector('.create-task-btn');
createTaskBtn.addEventListener('click', addNewTodo);


listElem.addEventListener('click', isChecked);




