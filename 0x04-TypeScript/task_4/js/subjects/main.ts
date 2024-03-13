// main.ts

export const CPP_SUBJECT: string = "Cpp Subjects";
export const JAVA_SUBJECT: string = "Java Subjects";
export const REACT_SUBJECT: string = "React Subjects";

export class Teacher {
    constructor(public experienceTeachingC: number) {}

    // Methods
    getRequirements(): string {
        return "Requirements for this subject.";
    }

    getAvailableTeacher(): string {
        return `Available teacher with experience in C++: ${this.experienceTeachingC} years.`;
    }
}

export const cTeacher: Teacher = new Teacher(10);

function logSubject(subject: string, teacher: Teacher) {
    console.log(`Subject: ${subject}`);
    console.log(teacher.getRequirements());
    console.log(teacher.getAvailableTeacher());
}

logSubject(CPP_SUBJECT, cTeacher);
logSubject(JAVA_SUBJECT, cTeacher);
logSubject(REACT_SUBJECT, cTeacher);
