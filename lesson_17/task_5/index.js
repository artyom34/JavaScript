
export const timer = {
	secondsPassed: 0,
	minsPassed: 0,
	intervalid: 0,

	startTimer(){
		this.intervalid = setInterval( () => {
			this.secondsPassed++;

			if(this.secondsPassed === 60){
				this.minsPassed++;
				this.secondsPassed = 0;
			}
		},
		1000);
	},
	
	getTime(){
			if(String(this.secondsPassed).length === 1){
				this.secondsPassed  =  '0' + this.secondsPassed;
			}
			return `${this.minsPassed}:${this.secondsPassed}`;
	},

	stopTimer(){
		clearInterval(this.intervalid);
	},
	
	resetTimer(){
		this.secondsPassed = 0;
		this.minsPassed = 0;
	}
}




