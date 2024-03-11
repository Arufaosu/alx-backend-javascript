// 1-get_list_student_ids.js

function getListStudentIds(studentList) {
	if (!Array.isArray(studentList)) {
		return [];
	}

	const ids = studentList.map(student => student.id);
	return ids;
}

export default getListStudentIds;
