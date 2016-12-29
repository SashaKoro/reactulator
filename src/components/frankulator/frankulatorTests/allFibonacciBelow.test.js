import allFibonacciBelow from '../frankulatorFunctions/allFibonacciBelow';
import expect from 'expect';

describe(allFibonacciBelow, function() {
  this.timeout(200);
  it('expects blank string to prompt Please enter a number', function() {
    expect(allFibonacciBelow()).toEqual("Please enter a number");
  });
  it('expects sum of fibonacci numbers under 0 to be 0', function() {
    expect(allFibonacciBelow(0)).toEqual(0);
  });
  it('expects sum of fibonacci numbers under 1 to be 0', function() {
    expect(allFibonacciBelow(1)).toEqual(0);
  });
  it('expects sum of fibonacci numbers under 2 to be 2', function() {
    expect(allFibonacciBelow(2)).toEqual(2);
  });
  it('expects sum of fibonacci numbers under 7 to be 12', function() {
    expect(allFibonacciBelow(7)).toEqual(12);
  });
  it('expects sum of fibonacci numbers under 20 to be 33', function() {
    expect(allFibonacciBelow(20)).toEqual(33);
  });
  it('expects sum of fibonacci numbers under 89 to be 143', function() {
    expect(allFibonacciBelow(89)).toEqual(143);
  });
  it('expects sum of fibonacci numbers under "0" to be 0', function() {
    expect(allFibonacciBelow("0")).toEqual(0);
  });
  it('expects sum of fibonacci numbers under "1" to be 0', function() {
    expect(allFibonacciBelow("1")).toEqual(0);
  });
  it('expects sum of fibonacci numbers under "2" to be 2', function() {
    expect(allFibonacciBelow("2")).toEqual(2);
  });
  it('expects sum of fibonacci numbers under "7" to be 12', function() {
    expect(allFibonacciBelow("7")).toEqual(12);
  });
  it('expects sum of fibonacci numbers under "20" to be 33', function() {
    expect(allFibonacciBelow("20")).toEqual(33);
  });
  it('expects sum of fibonacci numbers under "89" to be 143', function() {
    expect(allFibonacciBelow("89")).toEqual(143);
  });
});
