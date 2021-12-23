
const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export const getDiff = (startDate, endDate) => {
	const difference = Math.abs(startDate - endDate);

	
	const days = Math.floor(difference / DAY);
	const hours = Math.floor((difference % DAY) /  HOUR);
	const minutes = Math.floor((difference % HOUR) / MINUTE);
	const seconds = Math.floor((difference % MINUTE) / SECOND);

	const differenceInDates = `${days}d ${hours}h ${minutes}m ${seconds}s`;

	return differenceInDates;
};


const differenceDate = getDiff(new Date(2022, 0), new Date());

console.log(differenceDate);
