import { SinonSpy } from "sinon";
import Calculator from "../src/calculator";
import sinon from "sinon";
import { assert, expect } from "chai";

describe('spy suite', () => {
    const myCalcObj = new Calculator();
    let spy: SinonSpy;
    it('spy the callback that is called in myCalc function', () => {
        const spyCallback = sinon.spy();
        myCalcObj.myCalc(3, 5, spyCallback);
        myCalcObj.myCalc(3, 5, spyCallback);

        expect(spyCallback.callCount).equal(2);
        expect(spyCallback.called).true;
        expect(spyCallback.calledTwice).true;
        spyCallback.restore;
    });

    it('spy a function being used in sumWithCallingPrintString', () => {
        const printSpy = sinon.spy(myCalcObj, 'printString');

        const result1 = myCalcObj.sumWithCallingPrintString(3, 5);
        const result2 = myCalcObj.sumWithCallingPrintString(30, 15);

        expect(result1).equal(8);
        expect(result2).equal(45);
        expect(printSpy.calledTwice).true;
        expect(printSpy.calledWith('my testing world')).true;

        //sinon.assert are much better in terms of fail descriptions!!!
        sinon.assert.calledTwice(printSpy);
        sinon.assert.calledWithExactly(printSpy, 'my testing world');
        // sinon.assert.calledOnceWithExactly(printSpy, 'my testing world');

        printSpy.restore;

    });

    it('spy a property in getter setter', () => {

    });
});