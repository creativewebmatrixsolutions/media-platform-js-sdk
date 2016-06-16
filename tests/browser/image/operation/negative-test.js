var Negative = require('../../../../src/image/operation/effect/negative');
var expect = require('expect.js');

describe('negative', function () {

    it('serializes', function () {
        var negative = new Negative({});
        negative.activate();

        expect(negative.serialize()).to.be('neg');
    });

    it('can be reset by false', function () {
        var negative = new Negative({});
        negative.activate();
        negative.activate(false);

        expect(negative.serialize()).to.be('');
    });
});