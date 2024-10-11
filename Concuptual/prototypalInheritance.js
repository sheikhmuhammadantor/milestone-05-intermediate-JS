function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.speak = function() {
    console.log(`${this.name} makes a noise.`);
  };
  
  function Dog(name) {
    Animal.call(this, name);  // Call the parent constructor
  }
  
  Dog.prototype = Object.create(Animal.prototype);  // Set up inheritance
  Dog.prototype.constructor = Dog;  // Fix the constructor reference
  
  Dog.prototype.speak = function() {
    console.log(`${this.name} barks.`);
  };
  
  const dog1 = new Dog('Rover');
  dog1.speak();  // "Rover barks"
  