export function hello(params) {
import readlineSync from 'readline-sync';
const name = readlineSync.question('May I Have Your Name: ');
console.log("Hello Dear", name, "!!!");
}