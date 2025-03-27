
// merge objects
const obj1 = {a: 1, b:7};
const obj2 = {b:3, c:4};

const mergedObj = {...obj2, ...obj1};
const mergedObj2 = Object.assign({}, obj1, obj2)

console.log(mergedObj, mergedObj2);
