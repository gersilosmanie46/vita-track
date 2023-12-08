/* 
Filename: complexCode.js
Content: Sample code showcasing a complex and sophisticated JavaScript application
*/

// Class representing a Person
class Person {
  constructor(name, age, id) {
    this.name = name;
    this.age = age;
    this.id = id;
  }

  // Method to display the details of a person
  displayDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}, ID: ${this.id}`);
  }
}

// Function to generate unique IDs
function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

// Function to calculate the average of an array of numbers
function calculateAverage(arr) {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum / arr.length;
}

// Array of person objects
const people = [
  new Person("John", 25, generateId()),
  new Person("Alice", 30, generateId()),
  new Person("Bob", 35, generateId())
];

// Function to filter people above a certain age
function filterPeopleAboveAge(peopleArr, ageLimit) {
  return peopleArr.filter(person => person.age > ageLimit);
}

// Display details of all people
console.log("All People:");
people.forEach(person => person.displayDetails());

// Calculate and display the average age
const ages = people.map(person => person.age);
const averageAge = calculateAverage(ages);
console.log(`Average Age: ${averageAge}`);

// Filter people above age 30
const filteredPeople = filterPeopleAboveAge(people, 30);
console.log("People above 30:");
filteredPeople.forEach(person => person.displayDetails());

// Sample utility function
function timeConsumingOperation() {
  let result = 0;
  for (let i = 0; i < 100000; i++) {
    result += i;
  }
  return result;
}

// Perform a time-consuming operation
const operationResult = timeConsumingOperation();
console.log(`Time-consuming Operation Result: ${operationResult}`);
...

// (200+ lines of code continue...)