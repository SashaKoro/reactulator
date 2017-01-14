import primeNumberOrNot from './primeNumberOrNot';
import semiPrimeOrNot from './semiPrimeOrNot';
import * as is from '../stringConstants/stringConstants';

const chenPrimeOrNot = inputNum => {

  if (/[a-z]/i.test(inputNum)) return inputNum;

  if (primeNumberOrNot(inputNum).endsWith(is.PRIME)) {
    if (primeNumberOrNot(inputNum + 2).endsWith(is.PRIME) ||
      semiPrimeOrNot(inputNum + 2).endsWith(is.SEMIPRIME)) {
      return `${inputNum}${is.CHENPRIME}`;
    }
    return `${inputNum}${is.NONCHEN_PRIME}`;
  }
  return `${inputNum}${is.NOT_PRIME}`;
};

export default chenPrimeOrNot;
