const arenaElement = document.querySelector('.arena');
const boardChildElement = document.querySelector('.board__selected-seat');

for(let secEl = 1; secEl <= 3; secEl++){
	let sectorElement = document.createElement('div');
	sectorElement.classList.add('sector');
	sectorElement.dataset.index = secEl;
	arenaElement.appendChild(sectorElement);

	for(lineEl = 1; lineEl <= 10; lineEl++){
		const sectorLineElement = document.createElement('div');
		sectorLineElement.classList.add('sector__line');
		sectorLineElement.dataset.index = lineEl;
		sectorElement.appendChild(sectorLineElement);


		for(seatEl = 1; seatEl <= 10; seatEl++){
			const sectorSeatElement = document.createElement('div');
			sectorSeatElement.classList.add('sector__seat');
			sectorSeatElement.dataset.index = seatEl;
			sectorLineElement.appendChild(sectorSeatElement);

		}
	}
}

arenaElement.addEventListener('click', (event) => {
	let target = event.target;

	if(!target){
		return;
	}

	let seatSelected = target.dataset.index;
	let lineSelected = target.closest('.sector__line').dataset.index;
	let sectorSelected = target.closest('.sector').dataset.index;

	boardChildElement.textContent = `S ${sectorSelected} - L ${lineSelected} - S ${seatSelected}`;
});
