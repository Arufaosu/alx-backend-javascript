export default function createIteratorObject(report) {
	const allEmployees = report.allEmployees;
	const departments = Object.values(allEmployees);
	const employees = departments.flatMap(dept => dept);

	let index = 0;

	return {
		next() {
			return index < employees.length ?
				{ value: employees[index++], done: false } :
				{ done: true };
		},
		[Symbol.iterator]() {
			return this;
		}
	};
}
