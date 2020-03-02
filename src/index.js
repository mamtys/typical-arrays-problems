
const _isValid = array => {
  if (!array || !array.length) {
    return false;
  }

  return true;
}

exports.min = function min (array) {
  if (!_isValid(array)) {
    return 0;
  }

  return Math.min(...array);
}

exports.max = function max (array) {
  if (!_isValid(array)) {
    return 0;
  }

  return Math.max(...array);
}

exports.avg = function avg (array) {
  if (!_isValid(array)) {
    return 0;
  }

  const arraySum = array.reduce((sum, cur) => sum + cur, 0);

  return arraySum/array.length;
}



