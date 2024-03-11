// 8-clean_set.js

function cleanSet(set, startString) {
	const cleanedValues = [];
	set.forEach(value => {
		if (value.startsWith(startString)) {
			cleanedValues.push(value.substring(startString.length));
		}
	});

	return cleanedValues.join('-');
}

export default cleanSet;
