import factorial from '../frankulatorFunctions/factorial';
import expect from 'expect';

describe(factorial, function() {
  this.timeout(200);
  it('expects blank string to prompt Please enter a number', function() {
    expect(factorial()).toEqual("Please enter a number");
  });
  it('expects decimal number to prompt Number must be an Integer', function() {
    expect(factorial(2.5)).toEqual("Number must be an Integer");
  });
  it('expects the factorial of 0 to be 1', function() {
    expect(factorial(0)).toEqual(1);
  });
  it('expects the factorial of 1 to be 1', function() {
    expect(factorial(1)).toEqual(1);
  });
  it('expects the factorial of 2 to be 2', function() {
    expect(factorial(2)).toEqual(2);
  });
  it('expects the factorial of 5 to be 120', function() {
    expect(factorial(5)).toEqual(120);
  });
  it('expects the factorial of 11 to be 39916800', function() {
    expect(factorial(11)).toEqual(39916800);
  });
  it('expects the factorial of "0" to be 1', function() {
    expect(factorial("0")).toEqual(1);
  });
  it('expects the factorial of "1" to be 1', function() {
    expect(factorial("1")).toEqual(1);
  });
  it('expects the factorial of "2" to be 2', function() {
    expect(factorial("2")).toEqual(2);
  });
  it('expects the factorial of "5" to be 120', function() {
    expect(factorial("5")).toEqual(120);
  });
  it('expects the factorial of "11" to be 39916800', function() {
    expect(factorial("11")).toEqual(39916800);
  });
});
