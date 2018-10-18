var _ = function(element) {
  var a = {
    first: function() {
      return element[0];
    },
    last: function() {
      return element[element.length -1];
    },
    without: function() {
      var newArr = element.slice();

      Array.prototype.slice.call(arguments).forEach(function(arg) {
        newArr.splice(newArr.indexOf(arg), 1);
      });

      return newArr;
    },
    lastIndexOf: function(value) {
      return element.lastIndexOf(value);
    },
    sample: function() {
      // refactor this to return a random element from the array
      console.log(arguments.length);
      if (arguments.length === 0) {
        return element[0];
      } else {
        return element.slice(0, arguments[0]);
      }
    },
  };

  return a;
};

_.range = function() {
  var rangeArr = [];
  var start = 0;
  var finish;
  var argumentsArray = Array.prototype.slice.call(arguments);

  if (argumentsArray.length === 1) {
    finish = argumentsArray[0];
  } else {
    [start, finish] = argumentsArray;
  }

  for (var i = start; i < finish; i++) {
    rangeArr.push(i);
  }

  return rangeArr;
};
