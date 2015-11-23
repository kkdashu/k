function flatten(array, result) {
  if(!Array.isArray(array)) {
    result.push(array);
  } else {
    array.forEach(function(item) {
      flatten(item, result);
    });
  }
}

module.exports = function (array) {
  var result = [];
  flatten(array, result);
  return result;
};
