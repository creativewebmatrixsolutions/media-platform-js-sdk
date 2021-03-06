import {expect} from 'chai';
import {JPEG} from '../../../../src/image/encoder/jpeg';
import {Image} from '../../../../src';

describe('jpeg', function () {

  it('serializes', function () {
    const jpeg = new JPEG(new Image());
    jpeg.compression(99, true);

    expect(jpeg.serialize()).to.deep.equal({params: 'q_99,bl', error: null});
  });

  it('baseline is optional', function () {
    const jpeg = new JPEG(new Image());
    jpeg.compression(99);

    expect(jpeg.serialize()).to.deep.equal({params: 'q_99', error: null});
  });

  it('progressive default is omitted', function () {
    const jpeg = new JPEG(new Image());
    jpeg.compression(100, false);

    expect(jpeg.serialize()).to.deep.equal({params: 'q_100', error: null});
  });

  it('quality default (75) is omitted', function () {
    const jpeg = new JPEG(new Image());
    jpeg.compression(75);

    expect(jpeg.serialize()).to.deep.equal({params: '', error: null});
  });

  it('reject quality values greater than 100', function () {
    const jpeg = new JPEG(new Image());
    jpeg.compression(101);

    expect(jpeg.serialize()).to.deep.equal({
      params: '',
      error: 'jpeg compression quality: 101 is not a number between 0 to 100'
    });
  });

  it('reject quality values smaller than 0', function () {
    const jpeg = new JPEG(new Image());
    jpeg.compression(-1);

    expect(jpeg.serialize()).to.deep.equal({
      params: '',
      error: 'jpeg compression quality: -1 is not a number between 0 to 100'
    });
  });

  it('rounds quality values', function () {
    const jpeg = new JPEG(new Image());
    jpeg.compression(40.67);

    expect(jpeg.serialize()).to.deep.equal({
      params: 'q_41',
      error: null
    });
  });

  it('resets for undefined', function () {
    const jpeg = new JPEG(new Image());
    jpeg.compression(-1, true);
    jpeg.compression();

    expect(jpeg.serialize()).to.deep.equal({
      params: '',
      error: null
    });
  });
});
