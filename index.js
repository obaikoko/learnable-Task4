class LearnableClass {
  static classProperty = "This is a class property";

  static classMethod() {
    return `This is a class method, accessing ${this.classProperty}`;
  }
}

// Accessing class property
console.log(LearnableClass.classProperty);

// Using class method
const result = LearnableClass.classMethod();
console.log(result);