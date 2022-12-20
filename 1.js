import readlineSync from "readline-sync";

let rows = readlineSync.questionInt("Enter the Number of Rows : ");
let cols = readlineSync.questionInt("Enter the Number of Columns : ");

let arr = new Array(rows);

//3 X 3

for (let i = 0; i < rows; i++) {
    arr[i] = new Array(cols);
}

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        arr[i][j] = readlineSync.questionInt(`Enter the Element ${i} ${j} : `);
    }
}
console.log(arr);