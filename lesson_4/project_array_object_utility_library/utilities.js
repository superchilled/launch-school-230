function randomArrayIndex(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
};

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
      var randIndex

      if (arguments.length === 0) {
        randIndex = randomArrayIndex(element.length);
        return element[randIndex];
      } else {
        var arrCopy = element.slice();
        var newArr = [];
        for (var i = 0; i < arguments[0]; i++) {
          randIndex = randomArrayIndex(arrCopy.length);
          newArr.push(arrCopy.splice(randIndex, 1).pop());
        }

        return newArr;
      }
    },
    findWhere: function(matchObject) {
      var foundObject;
      var currentObject;
      var match;
      var matchKeys = Object.keys(matchObject);
      var currentKey;

      for (var i = 0; i < element.length; i++) {
        match = true;
        currentObject = element[i];

        for (var j = 0; j < matchKeys.length; j++) {
          currentKey = matchKeys[j];

          if (matchObject[currentKey] !== currentObject[currentKey]) {
            match = false;
            break;
          }
        }

        if (match === true) {
          foundObject = currentObject;
          break;
        }
      }
      return foundObject;
    },
    where: function(matchObject) {
      var foundObjects = [];
      var matchKeys = Object.keys(matchObject);
      var currentKey;

      element.forEach(function(obj) {
        for (var i = 0; i < matchKeys.length; i++) {
          currentKey = matchKeys[i];

          if (matchObject[currentKey] !== obj[currentKey]) {
            continue;
          }
          foundObjects.push(obj);
        }
      });

      return foundObjects;
    },
    pluck: function(key) {
      var returnedValues = [];

      element.forEach(function(obj) {
        if (obj[key]) {
          returnedValues.push(obj[key]);
        }
      });

      return returnedValues;
    },
    keys: function() {
      return Object.keys(element);
    },
    values: function() {
      return Object.values(element);
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
