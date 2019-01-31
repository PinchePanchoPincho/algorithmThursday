require('chai').should();
const expect = require('chai').expect;
const lowestProduct = require('../index')

describe('lowest product of 4 consecutive numbers', () => {


  it ('should return the lowest product of 4 consecutive numbers', () => {
    lowestProduct('2424242424').should.equal(64);
    lowestProduct('4242424242').should.equal(64);
    lowestProduct('4732368123643246358735278').should.equal(36);
    lowestProduct('1234').should.equal(24);
    lowestProduct('438943849789528973258748974897893897587895789547478478938974897489347897437894437347894375478954858547843785').should.equal(210);
    lowestProduct('999999999').should.equal(6561);
    lowestProduct('43544266446436643634662622644626464461111246436858565959959975986686585634545433232325335523532532532532532364633465663').should.equal(1);
    lowestProduct('1111').should.equal(1);
  });

  it ('should return "Number is too small" if less than 4 digits', () => {
    lowestProduct('999').should.equal('Number is too small');
    lowestProduct('1').should.equal('Number is too small');
    lowestProduct('5').should.equal('Number is too small');
    lowestProduct('24').should.equal('Number is too small');
    lowestProduct('42').should.equal('Number is too small');
    lowestProduct('111').should.equal('Number is too small');
  });


});