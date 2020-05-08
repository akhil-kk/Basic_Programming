// extra tasks

let classBtech = {
  name: "ECE",
  classTeacher: "Maverick",
  student: [
    {
      name: "Arjun",
      id: 01,
      marks: [
        { subject: "Physics", mark: 45 },
        { subject: "Chemistry", mark: 48 },
        { subject: "Maths", mark: 45 },
        { subject: "English", mark: 50 },
        { subject: "Computer", mark: 48 }
      ]
    },
    {
      name: "Don",
      id: 02,
      marks: [
        { subject: "Physics", mark: 46 },
        { subject: "Chemistry", mark: 45 },
        { subject: "Maths", mark: 48 },
        { subject: "English", mark: 49 },
        { subject: "Computer", mark: 49 }
      ]
    },
    {
      name: "Akhil",
      id: 03,
      marks: [
        { subject: "Physics", mark: 49 },
        { subject: "Chemistry", mark: 44 },
        { subject: "Maths", mark: 46 },
        { subject: "English", mark: 45 },
        { subject: "Computer", mark: 48 }
      ]
    }
  ]
}

 // Alternate method for sort.
 
const sortBySubject = (subjectName) => {
  let sortedStudentArray = [];
  let marksArray = [];
  for (let i = 0; i < classBtech.student.length; i++) {
    for (let j = 0; j < classBtech.student[i].marks.length; j++) {
      if (classBtech.student[i].marks[j].subject === subjectName) {
        marksArray.push(classBtech.student[i].marks[j].mark);
      }
    }
  }
  let sortedMark = marksArray.reverse(marksArray.sort());
  console.log(sortedMark);
  for (let k = 0; k < sortedMark.length; k++) {
    sortedStudentArray.push(checkMarks(sortedMark[k], subjectName));
  }
  //console.log(sortedStudentArray);
}

const checkMarks = (tempMark, sub) => {
  for (let i = 0; i < classBtech.student.length; i++) {
    for (let j = 0; j < classBtech.student[i].marks.length; j++) {
      if (classBtech.student[i].marks[j].mark === tempMark && classBtech.student[i].marks[j].subject === sub) {
        return classBtech.student[i];
      }
    }
  }
}

sortBySubject("Maths");
// Find the total mark for a student and save it in the user object

const totalMark = (studentId) => {
  let studentTotal = 0;
  for (let i = 0; i < classBtech.student.length; i++) {
    for (let j = 0; j < classBtech.student[i].marks.length; j++) {
      if (classBtech.student[i].id === studentId) {
        studentTotal = studentTotal + classBtech.student[i].marks[j].mark;
        classBtech.student[i].total = studentTotal;
      }
    }
  }
  console.log(classBtech.student);
}

totalMark(02);