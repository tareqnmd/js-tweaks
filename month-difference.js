const getMonthDifference = (startDate, endDate) => {
	const start = new Date(startDate);
	const end = new Date(endDate);
	const monthsDifference = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
	return monthsDifference + 1;
};

getMonthDifference('2023-12', '2024-11');
