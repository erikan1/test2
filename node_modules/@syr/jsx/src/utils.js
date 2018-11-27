const toConsumableArray = function(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}

const transformOnType = transforms => node => {
  const transformer = transforms[node.type]
  if (transformer) {
    return transformer(node)
  }
  throw new Error(`${node.type} could not be transformed`)
}

export {
  toConsumableArray,
  transformOnType
};