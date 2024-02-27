import sinon, { SinonMock, SinonStub } from "sinon";
import User from "../src/user";
import { expect } from "chai";

describe('user', () => {
    const userArgs = { id: 11, name: 'Musti' };
    const stubUser = { name: 'Mustafa', id: 12 };
    let userMock: SinonMock;
    it('findUser should return the user if the id is correct', async () => {
        // const userMock = new User(userArgs.id, userArgs.name);
        userMock = sinon.mock(User);

        // userMock.expects('findUser').resolves(new User(11, "John")); // works
        // userMock.expects('findUser').resolves(stubUser); // also works
        const expectation = userMock.expects('findUser').exactly(5).withArgs(userArgs.id).resolves(stubUser); // also works. Calls till 5 (<=5)are mocked

        const result = await User.findUser(11);
        const result2 = await User.findUser(11);
        const result3 = await User.findUser(11);
        const result4 = await User.findUser(11);
        const result5 = await User.findUser(11);
        // const result6 = await User.findUser(11);
        // expect(result.id).equal(11);
        expect(expectation.callCount).equal(5);
        expect(result.name).equal("Mustafa");
        expect(result.id).equal(12);
        userMock.restore();
    });
});