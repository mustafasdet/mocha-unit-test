import { expect } from "chai";
import Calculator from "../src/calculator";
import nock from "nock";
const baseUrl = `https://jsonplaceholder.typicode.com`;
describe('API testing with nock', () => {
    let calc: Calculator;
    nock(baseUrl);
    it('real GET - should GET user with id', async () => {
        calc = new Calculator();
        const response = await calc.getUser();
        console.log(response.status);
        console.log(response.data);
        console.log(response.data.id);
        // console.log(response.headers);
        expect(response.status).to.be.ok;
        expect(response.data.id).to.be.equal(1);
    });
    it('real POST should POST user with payload', async () => {
        calc = new Calculator();
        const userPayload = {
            // "id": 1, // id should be removed from post requests!!!
            "name": "Mustafa Sdet",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        }
        const response = await calc.createUser(userPayload);
        console.log(response.status);
        console.log(response.data);
        console.log(response.data.id);
        // console.log(response.headers);
        expect(response.status).to.be.ok;
        expect(response.status).to.be.equal(201);
        // expect(response.data.id).to.be.equal(1);
        expect(response.data.name).to.equal('Mustafa Sdet');
    });

    it('nock GET - should GET user', async () => {
        calc = new Calculator();

        const nockedResponseData = {
            name: 'Mustafa Sdet',
            id: 1,
            username: 'mustafasdet'
        }
        nock(baseUrl).get('/users/1').reply(200, nockedResponseData);
        const response = await calc.getUser();
        // console.log('responseFromNock:\n', responseFromNock)
        console.log('get nocked data:\n',response.data);
        expect(response.status).to.be.ok;
        expect(response.data).to.haveOwnProperty('id').equal(1);
        expect(response.data.id).equal(1);
        expect(response.data).to.haveOwnProperty('name').include('Mustafa Sdet');
        expect(response.data.name).equal('Mustafa Sdet');
        expect(response.data).to.haveOwnProperty('username').equal(`mustafasdet`);
        expect(response.data.username).equal('mustafasdet');
    });
    it('nock POST - should create a user', async () => {
        const calc = new Calculator();
        
        const userPayload = {
            // "id": 1, // id should be removed from post requests!!!
            "name": "Mustafa Sdet",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        }

        const nockedUserPayload = {
            name: 'Mustafa POST request',
            username: 'mustafasdet11',
            job: 'sdet'
        }
        nock(baseUrl).post('/users', userPayload).reply(201, nockedUserPayload);
        const response = await calc.createUser(userPayload);
        console.log('post nocked data:\n',response.data)
        expect(response.status).to.be.ok;
        expect(response.data.name).equal('Mustafa POST request');
        expect(response.data.username).equal('mustafasdet11');
        expect(response.data.job).equal('sdet');
    });
    after(() => {
        nock.cleanAll();
    });
});