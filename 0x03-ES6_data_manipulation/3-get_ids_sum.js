// 3-get_ids_sum.js

function getStudentIdsSum(studentList) {
	const sum = studentList.reduce((acc, student) => acc + student.id, 0);
	return sum;
}

export default getStudentIdsSum;
