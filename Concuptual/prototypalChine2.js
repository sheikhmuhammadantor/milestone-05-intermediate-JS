function Vehicle(type) {
    this.type = type;
  }
  
  Vehicle.prototype.move = function() {
    console.log(`${this.type} is moving`);
  };
  
  function Car(type, brand) {
    Vehicle.call(this, type);  // Call the Vehicle constructor
    this.brand = brand;
  }
  
  Car.prototype = Object.create(Vehicle.prototype);  // Inherit from Vehicle
  Car.prototype.constructor = Car;  // Correct the constructor pointer
  
  Car.prototype.honk = function() {
    console.log(`${this.brand} is honking`);
  };
  
  const myCar = new Car('Car', 'Toyota');
  myCar.move();  // "Car is moving"
  myCar.honk();  // "Toyota is honking"
  