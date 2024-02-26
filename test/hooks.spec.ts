import { expect } from "chai";
import Calculator from "../src/calculator";

describe('hooks test suite parent', () => {
    let calc: Calculator;
    before(() => {
        console.log('before test suite once');
        calc = new Calculator();
    });
    beforeEach(() => {
        console.log('beforeEach test');
    });

    afterEach(() => {
        console.log('afterEach test');
    });
    after(() => {
        console.log('after test suite once');
    });

    describe('add test suite child', () => {
        it('should return sum', () => {
            expect(calc.add(3, 5)).to.eq(8);
        });
        it('should return sum', () => {
            expect(calc.add(0, 545)).to.eq(545);
        });
    });

    describe('subtraction test suite child', () => {
        it('should return subtraction when second one is smaller', () => {
            expect(calc.subtract(5, 3)).to.eq(2);
        });
        it('should return subtraction when first one is smaller', () => {
            expect(calc.subtract(3, 5)).to.eq(-2);
        });
    });

});