(async()=>{
    const obj = await fetch("temp.json");
    const data = await obj.json();
    
   console.log( data.departments.reduce((acc,{courses})=>{
    courses.forEach(course=>{
        course?.students.forEach((student)=>{
            acc.push({
                name: student.name,
                id: student.studentId,
                gpa: (((student.grades.assignments.reduce((sum,val)=>{
                    sum+=val;
                    return sum
                },0)/student.grades.assignments.length*0.4+student.grades.midterm*0.3+student.grades.final*0.3)/20).toFixed(2))
            })
        })
    })
    return acc;
},[]))
})();
(async()=>{
    const obj = await fetch("temp.json");
    const data = await obj.json();
    
   console.log(data.departments.reduce((acc,department)=>{
    department.courses.forEach(({students,...course})=>(acc.push({...course})));
    return acc
   },[]))
})();


//1. Extract all student names and their GPAs (calculated from grades)

    // Calculate GPA based on assignments (40%), midterm (30%), and final (30%)

    // GPA = (assignment weightage + midterm weightage + final weightage) / 20

    // OUTPUT: [{name, id, gpa}, {name, id, gpa}...]

//2. Create a list of all courses with their schedules

    // OUTPUT: [ 
    //     {courseId, title, credits, schedule: {days: [], time, room} }, 
    //     {courseId, title, credits, schedule: {days: [], time, room} },...
    // ]

    (async()=>{
        const obj = await fetch("temp.json");
        const data = await obj.json();
        
       console.log(data.departments.reduce((acc,department)=>{
        acc.push({departmentName: department.name,departmentId: department.id,
            faculty:department.head,
        })
        return acc
       },[]))
    })();
//3. Generate a faculty directory with contact inOUTPUTion

    // OUTPUT: [ 
    //     {departmentName, departmentId, faculty: {name, id, email, qualifications: [], researchAreas: []} }, 
    //     {departmentName, departmentId, faculty: {name, id, email, qualifications: [], researchAreas: []} }..., 
    // ]//1. Calculate average grades for each course

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