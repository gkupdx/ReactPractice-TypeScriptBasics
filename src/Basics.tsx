// Data source to give to the Display component

//// PRIMITIVES
let age: number = 32;
let userName: string = "Max";
let isInstructor: boolean = true;

//// ARRAY
let hobbies: string[] = ["Sports", "Cooking"];

//// OBJECT
let person: { name: string; age: number } = {
  name: "Max",
  age: 32
};

//// ARRAY of OBJECTS
let people: { name: string; age: number }[] = [
  {
    name: "Julie",
    age: 20
  }
];

//// TYPE INFERENCE
let course = "React - The Complete Guide";
// course = 12345 // this doesn't work because of type inference

//// UNION TYPES (via the pipe symbol)
let hybrid: string | number = 12345;

//// TYPE ALIAS
type House = {
  address: string;
  city: string;
  zipCode: number;
};

let myHome: House = {
  address: "Test123",
  city: "Test",
  zipCode: 12345
};

//// FUNCTION (return types are INFERRED)
function add(a: number, b: number): number {
  return a + b;
}

function printLog(value: any): void {
  console.log(value);
}

//// GENERICS (<T> is then dynamically inferred @ run-time)
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, 0);
