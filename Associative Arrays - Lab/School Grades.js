function schoolGrades(input){
    let students = {};

    for (const line of input) {
        let info = line.split(' ');
        let name = info.shift();
        
        let grades = info.map(Number);
        
        if(!students[name]){
            students[name] = [];
        } 
            students[name] = students[name].concat(grades);
    
        
    }

        let studentsEntries = Object.entries(students);
        let sortedStudents = studentsEntries.sort((a,b) => a[0].localeCompare(b[0]));

    for (const [name, grades] of sortedStudents) {
        let sum = 0;

        for (const grade of grades) {
            sum+=grade;
        }

        let average = sum / grades.length;
        console.log(`${name}: ${average.toFixed(2)}`);
    } 
    
}
schoolGrades(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3']

);