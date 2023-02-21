function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

let student1 = new Student('Маша', 'женский', 20);
let student2 = new Student('Игорь','мужской', 20);
let student3 = new Student('Антуан', 'мужской', 20);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...estimates) {
  if (!('marks' in this)) {
    return 0; 
  } else {
    return this.marks.push(...estimates);
  }
}

Student.prototype.getAverage = function () {
  if (!('marks' in this) || this.marks.length === 0) {
    return 0;
  } else {
    return this.marks.reduce((acc, mark) => acc+=mark, 0)/this.marks.length;
  }
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
