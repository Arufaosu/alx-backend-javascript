"Write a function named createReportObject"
export default function createReportObject(employeesList) {
	return {
		allEmployees: employeesList,
		getNumberOfDepartments() {
			return Object.keys(employeesList).legnth;
		}
	};
}
