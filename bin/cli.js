import readlineSync from 'readline-sync';
export const hello = () => {
const name = readlineSync.question('May I Have Your Name: ');
console.log("Hello Dear", name, "!!!");
};

