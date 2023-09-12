//push
const fruits1 = ["apple", "banana"];
const newLength1 = fruits1.push("orange", "strawberry");
console.log("push");
console.log(fruits1);
console.log(newLength1);

//pop
const fruits2 = ["apple", "banana", "orange"];
const removedFruit1 = fruits2.pop();
console.log("pop");
console.log(fruits1);
console.log(fruits2);
console.log(removedFruit1);

//shift
const fruits3 = ["apple", "banana", "orange"];
const removedFruit2 = fruits3.shift();
console.log("shift");
console.log(fruits3);
console.log(removedFruit2);


//unshift
const fruits4 = ["banana", "orange"];
const newLength2 = fruits4.unshift("apple", "strawberry");
console.log("unshift");
console.log(fruits4);
console.log(newLength2);


//concat
const fruits5 = ["apple", "banana"];
const moreFruits = ["orange", "strawberry"];
console.log("concat");
const combined = fruits5.concat(moreFruits);
console.log(combined);


//slice
const fruits6 = ["apple", "banana", "orange", "strawberry"];
const sliced = fruits6.slice(1, 3);
console.log("slice");
console.log("fruits1");
console.log(sliced);


//splice
const fruits7 = ["apple", "banana", "orange"];
const removed = fruits7.splice(1, 1, "kiwi", "grape");
console.log("splice");
console.log(fruits7);
console.log(removed);


//forEach
console.log("foreach");
const numbers1 = [1, 2, 3];
numbers1.forEach((num) => {
  console.log(num * 2);
});

//map
console.log("map");
const numbers2 = [1, 2, 3];
const doubled = numbers2.map((num) => num * 2);
console.log(doubled);


//filter
console.log("filter");
const numbers3 = [1, 2, 3, 4, 5];
const evenNumbers = numbers3.filter((num) => num % 2 === 0);
console.log(evenNumbers);


//spread

console.log("spread");
const person = { name: "Alice", age: 30 };
const address = { city: "New York", country: "USA" };

const merged = { ...person, ...address };
console.log(merged);


//rest
console.log("rest");
const { name: personName, ...restOfPerson } = merged
;
console.log(personName);
console.log(restOfPerson);


//entries
console.log("entries");
const person2 = { name: "Alice", age: 30 };
const entries = Object.entries(person2);
console.log(entries);


//keys
console.log("keys");
const person3 = { name: "Alice", age: 30 };
const keys = Object.keys(person3);
console.log(keys);


//values
console.log("values");
const person4 = { name: "Alice", age: 30 };
const values = Object.values(person4);
console.log(values);
