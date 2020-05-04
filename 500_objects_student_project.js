// sample object

let classBtech = {
  name: "ECE",
  classTeacher: "Maverick",
  student: [
    {
      name: "Akhil",
      id: 01,
      marks: [
        { subject: "Physics", mark: "45" },
        { subject: "Chemistry", mark: "48" },
        { subject: "Maths", mark: "45" },
        { subject: "English", mark: "50" },
        { subject: "Computer", mark: "48" }
      ]
    },
    {
      name: "Arjun",
      id: 02,
      marks: [
        { subject: "Physics", mark: "46" },
        { subject: "Chemistry", mark: "45" },
        { subject: "Maths", mark: "48" },
        { subject: "English", mark: "49" },
        { subject: "Computer", mark: "49" }
      ]
    }
  ]
}

const addStudent = (studentName, studentId) => {
  studentObject = { name: studentName, id: studentId, marks: [] };
  classBtech.student.push(studentObject);
  //console.log(classBtech); 
}

const addMarks = (studentId, sub, markOfSubject) => {
  const markObject = { subject: sub, mark: markOfSubject };
  const index = classBtech.student.findIndex(item => item.id === studentId);
  if (index !== -1) {
    //console.log(classBtech.student[index]);
    classBtech.student[index].marks.push(markObject);
  }
}

const editMarkOfaSubject = (studentId, sub, markOfSubject) => {
  const editedMarkObject = { subject: "Physics", mark: markOfSubject }
  for (let i = 0; i < classBtech.student.length; i++) {
    for (let j = 0; j < classBtech.student[i].marks.length; j++) {
      if (classBtech.student[i].id === studentId && classBtech.student[i].marks[j].subject === sub) {
        classBtech.student[i].marks[j] = editedMarkObject;
        return classBtech.student[i].marks;
      }
    }
  }
}

const changeClassTeacher = (classTeacher) => {
  classBtech.classTeacher = classTeacher;
  return classBtech;
}

const removeStudent = (studentId) => {
  const newStudentList = classBtech.student.filter(item => item.id !== studentId);
  classBtech.student = newStudentList;
  return classBtech.student;
}

addStudent("Armaan", 03);
addMarks(03, "Physics", "48");
console.log(editMarkOfaSubject(02, "Physics", "50"));
console.log(changeClassTeacher("Benoist"));
console.log(removeStudent(01));