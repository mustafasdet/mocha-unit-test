import { expect, assert } from "chai";
// for should following 2 lines are required
import chai from 'chai';
chai.should();

describe('assert style', () => {
    it('EXPECT of chai assertion style', () => {
        const name: string = 'Mustafa';
        const age: number = 33;
        const objData: Object = { name: 'Mustafa', age: 33 }
        const arrData: Array<number> = [1, 2, 3];
        const boolData: boolean = true;

        // assert
        //string
        expect(name).to.be.ok;
        expect(name).to.equal('Mustafa');
        expect(name).to.not.equal('mustafa');
        expect(name).to.be.a('string');

        // number
        expect(age).to.be.ok;
        expect(age).to.equal(33);
        expect(age).to.not.equal(23);
        expect(age).to.be.a('number');
        // object
        expect(objData).to.be.ok;
        expect(objData).to.be.a('object'); // also 'Object' passes++
        expect(objData).to.haveOwnProperty('name');
        expect(objData).to.have.property('name');
        expect(objData).to.have.property('name').to.equal('Mustafa');
        expect(objData).to.haveOwnProperty('age');
        expect(objData).to.have.property('age');
        expect(objData).to.have.property('age').equal(33);

        // array
        expect(arrData).to.be.ok;
        expect(arrData).to.be.a('Array'); // also 'array' passes++
        expect(arrData).to.include(1);
        expect(arrData).to.not.include('2');
        expect(arrData).include(3);
        expect(arrData).not.include(6);
        expect(arrData).have.length(3);
        expect(arrData).have.length(3).include(1).include(2).include(3);
        expect(arrData).have.length(3).that.include(1).include(2).include(3);
        expect(arrData).not.have.length(5).that.not.include(5).include(8).include(55);

        // booldata
        expect(boolData).to.be.ok;
        expect(boolData).to.be.a('boolean');
        expect(boolData).equal(true);
    });

    it('SHOULD of chai assertion style', () => {
        const name: string = 'Mustafa';
        const age: number = 33;
        const objData: Object = { name: 'Mustafa', age: 33 }
        const arrData: Array<number> = [1, 2, 3];
        const boolData: boolean = true;

        // should
        //string
        name.should.be.ok;
        name.should.be.equal('Mustafa');
        name.should.be.not.equal('mustafa');
        name.should.be.a('string');

        // number
        age.should.be.ok;
        age.should.equal(33);
        age.should.not.equal(23);
        age.should.be.a('number');

    });

    it('ASSERT of chai assertion style', () => {
        const name: string = 'Mustafa';
        const age: number = 33;
        const objData: Object = { name: 'Mustafa', age: 33 }
        const arrData: Array<number> = [1, 2, 3];
        const boolData: boolean = true;

        // should
        //string
        assert.isOk(name);
        assert.equal(name, 'Mustafa')
        assert.notEqual(name, 'mustafa');
        assert.typeOf(name, 'string');

        // object
        assert.typeOf(objData, 'object');
        assert.deepEqual(objData, { name: 'Mustafa', age: 33 });
        assert.exists(objData, 'name');
        assert.exists(objData, 'age');
        assert.containsAllKeys(objData, ['name', 'age']);
        assert.propertyVal(objData, 'age', 33);
        assert.propertyVal(objData, 'name', 'Mustafa');

        //array
        assert.lengthOf(arrData, 3);
        assert.deepEqual(arrData, [1, 2, 3]);
        assert.notDeepEqual(arrData, [1, 2, 3, 4]);
        assert.include(arrData, 1);
        assert.notInclude(arrData, 11);

        //boolean
        assert.equal(boolData, true);
        assert.typeOf(boolData, 'boolean');
        assert.ok(boolData);
        assert.isOk(boolData);
        assert.isNotOk(!boolData);
    });

});