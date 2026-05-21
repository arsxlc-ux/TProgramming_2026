import * as readline from 'readline';
const a = 2.0;                 
const xStart = 1.2;            
const xEnd = 4.2;              
const deltaX = 0.6;            
const taskBValues = [1.16, 1.32, 1.47, 1.65, 1.93];
function calcY(x: number): number {
    const sum = a + x;              
    const logVal = Math.log10(sum); 
    return (logVal ** 2) * sum / (sum ** 2); 
}

// Решение задачи A 
console.log("Задача A:");
for(let x = xStart; x <= xEnd; x += deltaX) {
    console.log(`x = ${x.toFixed(2)}, y = ${calcY(x).toFixed(6)}`);
}

// Решение задачи B 
console.log("\n Задача B:");
taskBValues.forEach(x => {
    console.log(`x = ${x.toFixed(2)}, y = ${calcY(x).toFixed(6)}`);
});
