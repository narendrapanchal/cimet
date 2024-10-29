//1. Calculate average grades for each course

// Grade distribution:
// A: 90 and above
// B: 80 - 89
// C: 70 - 79
// D: 60 - 69
// F: Below 60

// OUTPUT: [
//     {
//       courseId,
//       courseName
//       totalStudents"
//       averages": {
//         "assignments",
//         "midterm",
//         "final",
//         "overall"
//       },
//       "gradeDistribution": {
//         "A": 1,
//         "B": 0,
//         "C": 0,
//         "D": 0,
//         "F": 0
//       }
//     },
//     {
//       "courseId",
//       "courseName",
//       "totalStudents",
//       "averages": {
//         "assignments",
//         "midterm",
//         "final",
//         "overall"
//       },
//       "gradeDistribution": {
//         "A": 0,
//         "B": 1,
//         "C": 1,
//         "D": 0,
//         "F": 0
//       }
//     }
//   ]
(async()=>{
    const detectCase = (marks) => {
        console.log(marks, "marks", marks >= 90);
        
        if (marks >= 90) {
            return "A";
        } else if (marks >= 80) {
            return "B";
        } else if (marks >= 70) {
            return "C";
        } else if (marks >= 60) {
            return "D";
        } else {
            return "F";
        }
    };
    const obj = await fetch("temp.json");
    const data = await obj.json();
    
   console.log(data.departments.reduce((acc,department)=>{
    
    acc.push(...department.courses.reduce((arr,course)=>{
        const gradeDistribution={
            "A": 0,
            "B": 0,
            "C": 0,
            "D": 0,
            "F": 0
          };
        const assignments=course.students.reduce((marks,student)=>{
            
            const temp=(student.grades.assignments.reduce((sum,val)=>sum+val,0)/student.grades.assignments.length).toFixed(2);
            console.log("detectCase(temp)",detectCase(temp))
            gradeDistribution[detectCase(temp)]++;
           return marks+ temp;
        },0);
        const midterm=course.students.reduce((marks,student)=>marks+ student.grades.midterm,0);
        const finalmarks=course.students.reduce((marks,student)=>marks+ student.grades.final,0);
        const studentLength=course.students.length;
       const temp2= {
                  courseId: course.courseId,
                  courseName:course.title,
                  totalStudents:course.students.length,
                  averages: {
                    assignments:(assignments/studentLength).toFixed(2),
                    midterm:(midterm/studentLength).toFixed(2),
                    final:(finalmarks/studentLength).toFixed(2),
                    overall:((finalmarks+midterm+assignments)/(9*studentLength)).toFixed(2)
                  },
                  gradeDistribution
                }
                arr.push(temp2);
                return arr;
    },[]))
    return acc
   },[]))
})();   