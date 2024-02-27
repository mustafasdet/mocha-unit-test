import { SinonSpy } from "sinon";
import Calculator from "../src/calculator";
import sinon from "sinon";
import { assert, expect } from "chai";

describe.only('spy suite', () => {
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

   
});