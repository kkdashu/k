var array_flatten = require('../array_flatten');

var arr = [1,2,3,4];
console.log(array_flatten(arr));

var arr2 = [[1], [2,3,4,[5,6,7]], [[[[8,9,[10,[11]]]]]]];
console.log(array_flatten(arr2));
