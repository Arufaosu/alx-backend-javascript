// 2-get_students_by_loc.js

function getStudentsByLocation(studentList, city) {
	const studentsInCity = studentList.filter(student => student.location === city);
	return studentsInCity;
}

export default getStudentsByLocation;
