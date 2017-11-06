-'use strict';
-
function double(array) {
   return array.map(function(x) {
   return x * 2;
});
};

// ===========================================================

function filter_list(l) {
    return l.filter(function (stringsandints) {
    return typeof stringsandints === 'number';
  });
};

//============================================================

function find_average(array) {
  var sum = array.reduce((x, y) => {return x + y});
  return sum / array.length;
};
