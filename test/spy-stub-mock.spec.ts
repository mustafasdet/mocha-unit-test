import { expect } from "chai";
import Calculator from "../src/calculator";
import sinon, { SinonMock, SinonSpy, SinonStub } from 'sinon';
/*
spy: do not change anything on the function such as return
stub: we can return anything with a stubbed function
mock: we can mock even an object and return anything we want.
*/
describe('Spy, stub, mock test suite', () => {
    let calcObj: Calculator;
    let spy: SinonSpy;
    let stub: SinonStub;
    let mock: SinonMock;
    before(() => {
        console.log('before test suite once');
        calcObj = new Calculator();
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
        it('spy - should return sum', () => {
            spy = sinon.spy(calcObj, 'add');
            expect(calcObj.add(3, 5)).to.eq(8);
            expect(spy.calledOnceWith(3, 5)).true; // assert that the "add" method of "calc" object is called once with arguments 3,5
            expect(spy.callCount).to.equal(1);// assert that the "add" method of "calc" object is called one time
            expect(spy.calledOnceWith()).true;// assert that the "add" method of "calc" object is called one time
            spy.restore(); // something like a page.close() not to affect other spies in other tests
        });

        it('stub addWithRandomNumber() - should return sum with addWithRandomNumber function', () => {
            // Below fails without stub. Because we do not know the actual number 
            //from the getRandomValue() function inside addWithRandomNumber
            // We can solve this issue with stub. 
            //So stub solves dependency to a return value of another function
            // expect(calc.addWithRandomNumber(3, 54)).to.eq(57); 

            stub = sinon.stub(calcObj, 'getRandomValue').returns(7);
            const result = calcObj.addWithRandomNumber(3, 54);
            expect(result).equal(64);
            stub.restore();

        });

        it('mock logMessage - behaves like a spy', () => {
            mock = sinon.mock(calcObj);
            let expectation = mock.expects('logMessage').exactly(1).withArgs('logging LogMsg'); // this part is like "spy"
            // expectation.withArgs('logging LogMsg'); // this is again as "spy" with adding arguments.
            const result = calcObj.addLogMsg(32, 11);
            expect(result).equal(43);
            expectation.verify(); // verify the log message.
            mock.restore();

        });
    });
    describe('subtraction test suite child', () => {
        it('spy - should return subtraction when second one is smaller', () => {
            spy = sinon.spy(calcObj, 'subtract');
            // lets spy for more than one call
            expect(calcObj.subtract(5, 3)).to.eq(2);
            expect(calcObj.subtract(12, 4)).equal(8);
            // spy expects
            expect(spy.callCount).equal(2);
            expect(spy.calledTwice).true;
            expect(spy.calledWith(5, 3)).true;
            expect(spy.calledWith(12, 4)).true;
            spy.restore();
        });



        it('real - without mock - should log "logging in subtractLogMsgsubtractLogMsg" ', () => {
            expect(calcObj.subtractLogMsg(3, 5)).to.eq(-2);
        });

        it.only('mock subtractLogMsg - note that console.log(logging in subtractLogMsg) is not printed!!! ', () => {
            mock = sinon.mock(calcObj);
            let expectation = mock.expects('logMessage').withArgs('logging in subtractLogMsg');
            const result = calcObj.subtractLogMsg(12, 7);
            expect(result).equal(5);
            expectation.exactly(1);
            expectation.verify();
            mock.restore();
        });
    });

}); 