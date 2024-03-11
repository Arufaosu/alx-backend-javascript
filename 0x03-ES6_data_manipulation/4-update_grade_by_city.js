// 4-update_grade_by_city.js

function updateStudentGradeByCity(studentList, city, newGrades) {
	const studentsInCity = studentList.filter(student => student.location === city);
	const updatedStudents = studentsInCity.map(student => {
		const gradeObj = newGrades.find(grade => grade.studentId === student.id);
		const grade = gradeObj ? gradeObj.grade : 'N/A';
		return { ...student, grade };
	});

	return updatedStudents;
}

export default updateStudentGradeByCity;
