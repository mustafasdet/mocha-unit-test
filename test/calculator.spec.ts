import Calculator from '../src/calculator'
import { expect } from 'chai';
// import {Calculator} from '../src/calculator'
describe('Test Calculator suite', () => {
    const calc = new Calculator();
    it('should return sum', () => {
      
        expect(calc.add(3, 5)).to.eq(8);
    });

    it('should return subtraction when second one is smaller', () => {
        expect(calc.subtract(5, 3)).to.eq(2);
    });
    it('should return subtraction when first one is smaller', () => {
        expect(calc.subtract(3, 5)).to.eq(-2);
    });

    it('should return multiplication', () => {
        expect(calc.multiply(9, 3)).to.eq(27);
    });

    it('should return division when result is integer', () => {
        expect(calc.divide(9, 3)).to.eq(3);
    });
    it('should return zero when 1st one is zero', () => {
        expect(calc.divide(0, 3)).to.eq(0);
    });

    // it('should throw error when divided by zero', () => {
    //     expect(()=>calc.divide(5,0)).to.throw('divident can not be zero');
    // });
    // it('should get random value', () => {
    //     expect(calc.getRandomValue()).to.be.greaterThan(0).to.be.lessThanOrEqual(10);
    // });

});