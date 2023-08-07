const extraMS = 6 * 60 * 60000;
const options = {
	timeZone: 'America/Los_Angeles',
};

const get_pacific_time = (date) => {
	const pacificTime = date.toLocaleString('en-US', options);
	return new Date(pacificTime);
};

const setTimes = () => {
	const endDate = new Date('2023-08-08T24:00:00');
	const currentDate = get_pacific_time(new Date());
	const diffMs = endDate - currentDate - extraMS;
	const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);
	console.log(days, hours, minutes, seconds);
};

setTimes();
