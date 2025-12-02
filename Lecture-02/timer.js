const startTime = Date.now();
function someHeavyTask() {
    for (let i = 0; i < se7 ; i++) {
        Math.sqrt(i);
    }
}
const endtime = Date.now();
const duration = endtime - startTime;
console.log(`ฟังก์ชันใช้เวลาทำงาน: ${duration} มิลลิวินาที`)