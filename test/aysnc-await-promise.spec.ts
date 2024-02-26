import { expect } from "chai";
import Calculator from "../src/calculator";

describe('async await promise test suite', () => {
    let calc: Calculator;

    it('should work with async and await', async () => {
        calc = new Calculator();
        const result = await calc.asyncFunctionPromise();
        expect(result).equal(4);
    });

    // explained one was passing always!. So added "async" 
    it('should work with async and await', async () => {
        calc = new Calculator();
        await calc.asyncFunctionPromise().then((result) => {
            console.log(result);
            // this setTimeout does not have anything positive!!!
            setTimeout(() => {
                console.log('wait for 1000 sec')
            }, 1000);
            expect(result).to.equal(4);
        });

    });
});