const glass = {
    name: "Glass",
    color: "Golden",
    price: 12,
    isClean: true
};

const keys = Object.keys(glass); // return the keys
const value = Object.values(glass); // return the values

console.log(keys);
console.log(value);

const pair = Object.entries(glass);
console.log(pair); // return the pairs of object

delete glass.isClean; // delete the isClean property
console.log(glass);

Object.freeze(glass); // cannot modify glass object