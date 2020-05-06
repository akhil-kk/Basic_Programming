// Objects - student project

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

const addStudent = (studentName, studentId) => {
  studentObject = { name: studentName, id: studentId, marks: [] };
  classBtech.student.push(studentObject);
  return classBtech;
}

const addMarks = (studentId, sub, markOfSubject) => {
  const markObject = { subject: sub, mark: markOfSubject };
  const index = classBtech.student.findIndex(item => item.id === studentId);
  if (index !== -1) {
    classBtech.student[index].marks.push(markObject);
    return classBtech.student[index];
  }
}

const editMarkOfaSubject = (studentId, sub, markOfSubject) => {
  const editedMarkObject = { subject: sub, mark: markOfSubject }
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
  const modifiedStudentList = classBtech.student.filter(item => item.id !== studentId);
  classBtech.student = modifiedStudentList;
  return classBtech.student;
}

const dltSubjectEntryFromAll = (sub) => {
  let modifiedSubjectArray;
  for (let k = 0; k < classBtech.student.length; k++) {
    for (let p = 0; p < classBtech.student[k].marks.length; p++) {
      if (classBtech.student[k].marks[p].subject === sub) {
        modifiedSubjectArray = classBtech.student[k].marks.filter(item => item.subject !== sub);
        classBtech.student[k].marks = modifiedSubjectArray;
        console.log(classBtech.student[k].marks);
      }
    }
  }
}

const findClassTopper = (sub) => {
  let topperArray = [];
  for (let q = 0; q < classBtech.student.length; q++) {
    for (let r = 0; r < classBtech.student[q].marks.length; r++) {
      if (classBtech.student[q].marks[r].subject === sub) {
        topperArray.push(classBtech.student[q].marks[r].mark);
      }
    }
  }
  let maxMark = Math.max(...topperArray);
  console.log(maxMark);
  for (let s = 0; s < classBtech.student.length; s++) {
    for (let t = 0; t < classBtech.student[s].marks.length; t++) {
      if (classBtech.student[s].marks[t].subject === sub && classBtech.student[s].marks[t].mark === maxMark) {
        return [classBtech.student[s].id, classBtech.student[s].name];
      }
    }
  }
}

const subjectAvgMark = (sub) => {
  let sum = 0;
  for (let i = 0; i < classBtech.student.length; i++) {
    for (let j = 0; j < classBtech.student[i].marks.length; j++) {
      if (classBtech.student[i].marks[j].subject === sub) {
        sum = sum + classBtech.student[i].marks[j].mark;
      }
    }
  }
  let average = sum / classBtech.student.length;
  return average;
}

const sortByName = () => {
  let sortedObject = classBtech.student.sort((nameObj1, nameObj2) => {
    let name1 = nameObj1.name.toLowerCase();
    let name2 = nameObj2.name.toLowerCase();
    if (name1 < name2) { return -1; }
    if (name1 > name2) { return 1; }
    return 0;
  })
  return sortedObject;
}

const sortBySubject = (sub) => {
  const sortedObj = classBtech.student.sort((studentObject1, studentObject2) => {
    const markObject1 = studentObject1.marks.find(mark => mark.subject === sub)
    const markObject2 = studentObject2.marks.find(mark => mark.subject === sub)
    return markObject2.mark - markObject1.mark;
  })
  return sortedObj;
}

console.log(addStudent("Armaan", 04));
console.log(addMarks(04, "Physics", "48"));
console.log(editMarkOfaSubject(02, "Physics", "50"));
console.log(changeClassTeacher("Melissa"));
console.log(removeStudent(01));
console.log(dltSubjectEntryFromAll("Physics"));
console.log(findClassTopper("Computer"));
console.log(subjectAvgMark("English"));
console.log(sortByName());
console.log(sortBySubject("Computer"));