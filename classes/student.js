const Person = require('./person');

// Your code here
class Student extends Person {
  constructor (firstName, lastName, major, GPA) {
    super(firstName, lastName);
    this.major = major;
    this.GPA = GPA;
  }

  static compareGPA(student1, student2) {
    function pickHighest(value1, value2) {
      if (value1.GPA === value2.GPA) {return false;}
      else if (value1.GPA > value2.GPA) {
        return value1;
      } else if (value1.GPA < value2.GPA) {
        return value2;
      }
    }

    const highest = pickHighest(student1, student2);

    if (highest) {
      return `${highest.firstName} ${highest.lastName} has the higher GPA.`;
    } else {
      return `Both students have the same GPA`;
    }
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
