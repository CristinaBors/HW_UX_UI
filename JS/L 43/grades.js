/* let = [0, 0, 0] 

let avg_grade = (grades[0] + grades[1] + grades[2]) / 3

console.log(`average grade = ${avg_grade.toFixed(2)}`) */

<Script> 

let grades = [];

for (let i = 0; i < 3; i++) {
    let input = prompt(`Enter grade ${i + 1} (1-10):`);
    let grade = parseFloat(input);

    if (isNaN(grade) || grade < 1 || grade > 10) {
        console.error(`Invalid grade: ${input}. Please enter a number between 1 and 10.`);
        throw new Error("Invalid input. Program stopped.");
    }

    grades.push(grade);
}

let avg_grade = (grades[0] + grades[1] + grades[2]) / 3;
console.log(`Average grade = ${avg_grade.toFixed(2)}`);

</Script>