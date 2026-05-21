
import * as readline from 'readline'; 

const a = 2.0;                  

const taskAData = [];
let currentX = 1.2;             
while(currentX <= 4.2) {        
    taskAData.push(currentX);    
    currentX += 0.6;             
}

// Значения x для задачи B 
const taskBData = [1.16, 1.32, 1.47, 1.65, 1.93];
const allXData = [...taskAData, ...taskBData];

function calcY(x: number): number {
    const sum = a + x;              
    const logVal = Math.log10(sum); 
    return (logVal ** 2) * sum / (sum ** 2); 
}

console.log("🔸 Результаты расчётов:\n");

for(let x of allXData) {     
    console.log(`x = ${x.toFixed(2)}, y = ${calcY(x).toFixed(6)}`);
}