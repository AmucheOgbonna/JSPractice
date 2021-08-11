function solveMeFirst(a, b) {
    // Hint: Type return a+b below   
    return a + b;
}

var res = solveMeFirst(10, 17);
console.log(res);



function gradingStudents(grades) {
    if (grades < 40) {
        return grades;
    } else if ((grades + 1) % 5 == 0) {
        var a = (grades + 1) - grades;
        if (a < 3) {
            console.log(grades + 1);
            return (grades + 1);
        } else {
            return grades;
        }
    } else {
        for (var x = (grades + 2); x <= (grades + 5); x++) {
            if ((x % 5 == 0) && ((x - grades) < 3)) {
                return x;
            } else {
                return grades;
            }
        }
    }
}
console.log(gradingStudents(73));

function gradingStudentss(grades) {
    var grade = 0;
    for (var x = 1; x < 6; x++) {
        grade = grades + x;
        console.log(grade);
        if ((grade % 5) == 0 && (grade % 5) > 40) {
            var graded = grade - grades;
            if (graded < 3) {
                return grade;
            } else {
                return grades;
            }
        } else if ((grade % 5) == 0 && (grade % 5) == 40) {
            return 40;
        } else {
            return grades;
        }
    }
}
console.log(gradingStudentss(73));



