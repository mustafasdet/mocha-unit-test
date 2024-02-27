import { expect } from "chai";
import UserQaBox from "../src/userQaBox";
import sinon from "sinon";

describe('stub with userqabox.ts', () => {

    const userQaBox = new UserQaBox();
    it('real - verify greet method', () => {
        const greeting = userQaBox.greet('Mustafa');
        expect(greeting).equal('Hello Mustafa');
    });

    it('real - verify greetMessage method', () => {
        const greetMsg = userQaBox.greetMessage('Mustafa');

        expect(greetMsg).equal('Hello Mustafa');
    });

    it('stub - verify greetMessage method with stubbing greet method', () => {
        const stub = sinon.stub(userQaBox, 'greet')
            .onCall(0).returns('call 0')
            .onCall(1).returns(`call 1`);

        // expect(greetMsgCall_0).equal('Hello whatever it is'); // Fails because we stub the greet function to return another message
        const greetMsgCall_0 = userQaBox.greetMessage('whatever it is');
        const greetMsgCall_1 = userQaBox.greetMessage('whatever it is');
        expect(greetMsgCall_0).equal('call 0');
        expect(greetMsgCall_1).equal('call 1');
    });

    it('real - verify async getUserByDataId function', async () => {
        const response = await userQaBox.getUserByDataId(2);
        console.log(response);
        expect(response.email).equal('janet.weaver@reqres.in');
    });

    it('stub - verify async getUserByDataId function', async () => {
        const stub = sinon.stub(userQaBox, 'getUserByDataId').withArgs(1).resolves({ email: 'mustafa@qa.team', name: 'Mustafa' });
        const response = await userQaBox.getUserByDataId(1);
        console.log(response);
        expect(response.email).equal('mustafa@qa.team');
    });
});