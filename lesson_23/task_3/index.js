let tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];


const listElem = document.querySelector('.list');

const renderTasks = (tasksList) => {

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
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

addTaskId(tasks);
renderTasks(tasks);
// put your code here

function addTaskId(objTask){
	let taskId = 1;

	for(let elem = 0; elem < objTask.length; elem++){
		objTask[elem].id = taskId;
		taskId++;
	}
	return objTask;
};

const addNewTodo = () =>{
	const textTodo = document.querySelector('.task-input');
	if(textTodo.value == '') { 
		return ;
	};

	listElem.innerHTML = '';
	tasks.unshift({text: textTodo.value, done: false});
	textTodo.value = '';

	addTaskId(tasks);
	renderTasks(tasks);	
};


const isChecked = event => {
	const dataId =	event.target.dataset.id;
	return tasks.find(({done, id}) => {
			let isTrue = id == dataId;
			done = isTrue;
	});
};

const createTaskBtn = document.querySelector('.create-task-btn');
createTaskBtn.addEventListener('click', addNewTodo);

const changeCheckbox = document.querySelectorAll('.list__item-checkbox');
listElem.addEventListener('change', isChecked);




