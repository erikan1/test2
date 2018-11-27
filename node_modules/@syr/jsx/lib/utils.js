"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var toConsumableArray = function toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
};

var transformOnType = function transformOnType(transforms) {
  return function (node) {
    var transformer = transforms[node.type];
    if (transformer) {
      return transformer(node);
    }
    throw new Error(node.type + " could not be transformed");
  };
};

exports.toConsumableArray = toConsumableArray;
exports.transformOnType = transformOnType;