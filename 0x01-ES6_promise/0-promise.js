// 0-promise.js

export default function getResponseFromAPI() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Sample response from API');
		}, 1000);
	});
}
