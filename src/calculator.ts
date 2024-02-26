// export class Calculator {
import axios from 'axios';
const baseUrl = `https://jsonplaceholder.typicode.com`;
class Calculator {
    add(num1: number, num2: number) {
        return num1 + num2;
    }
    addWithRandomNumber(num1: number, num2: number) {
        const num3 = this.getRandomValue();
        return num1 + num2 + num3;
    }
    addLogMsg(num1: number, num2: number) {
        this.logMessage('logging LogMsg')
        return num1 + num2;
    }
    subtract(num1: number, num2: number) {
        return num1 - num2
    }
    subtractLogMsg(num1: number, num2: number) {
        this.logMessage('logging in subtractLogMsg');
        return num1 - num2
    }
    multiply(num1: number, num2: number) {
        return num1 * num2
    }
    divide(num1: number, num2: number) {
        if (num2 === 0) {
            throw new Error(`divident can not be zero`)
        }
        return num1 / num2;
    }

    getRandomValue(): number {
        const randomValue = Math.floor(Math.random() * 10 + 1);// returns a random value between 1-10
        console.log('randomValue', randomValue)
        return randomValue;
    }

    logMessage(msg: string) {
        console.log(msg);
    }

    asyncFunctionPromise() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(4)
            }, 1000);
        })
    }
    async getUser() {
        return await axios.get(`${baseUrl}/users/1`)
    }

    async createUser(userpayload: object) {
        return await axios.post(`${baseUrl}/users`, userpayload);
    }
}
export default Calculator;