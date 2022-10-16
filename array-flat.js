const arr = [
	['a', 'b', 'c'],
	[4, 5, 6, [1, 2, 3, [3, 4]]],
];

const nestedArrayLength = () => {
	let sum = 0;
	const arrayCheck = (arr) => {
		arr.map((ee) => {
			if (Array.isArray(ee)) {
				arrayCheck(ee);
				sum++;
			}
		});
	};
	arrayCheck(arr);
	return sum;
};

console.log(nestedArrayLength(), arr.flat(nestedArrayLength()));
