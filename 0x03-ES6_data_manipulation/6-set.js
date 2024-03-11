// 6-set.js

function setFromArray(array) {
	if (typeof array === 'undefined') {
		throw new Error("An array must be provided");
	}

	const set = new Set(array);
	return set;
}

export default setFromArray;
