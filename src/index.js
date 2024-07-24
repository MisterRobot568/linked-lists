import LinkedList from './linked-list.js';
const list = new LinkedList();

list.append('dog');
list.append('cat');
list.prepend('rat');
list.append('cow');
list.append('pig');
list.toString();
let numNodes = list.size();
console.log(`number of nodes are: ${numNodes}`);

let head = list.head();
console.log(`Value of head node: ${head}`);

let tail = list.tail();
console.log(`tail node value of the list is: ${tail}`);

let valueAt = list.at(2);
console.log(`value of node at specific index: ${valueAt}`);

// list.toString();
// list.pop();
// list.toString();

let containsTrue = list.contains('cat');
let containsFalse = list.contains('bat');
console.log(`contains true: ${containsTrue}, contains false: ${containsFalse}`);

let findVal = list.find('cow');
console.log(`cow at index 3: ${findVal}`);

let insertAt = list.insertAt('bat', 2);
list.toString();

list.removeAt(2);
console.log('should remove "bat" at index 2');
list.toString();
