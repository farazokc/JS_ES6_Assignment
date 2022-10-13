class Automobile {
  constructor(name, color, type) {
    this.name = name;
    this.color = color;
    this.type = type;
  }

  start() {
    console.log(`${this.name} is started and idle`);
  }

  openDoor() {
    console.log(`${this.name} doors are open`);
  }

  accelerate() {
    console.log(`${this.name} is accelerating`);
  }

  decelerate() {
    console.log(`${this.name} is decelerating`);
  }

  switchOff() {
    console.log(`${this.name} has been switched off`);
  }

  displayInfo() {
    console.log(`Automobile INFO:\n
                 Name: ${this.name}\n
                 Color: ${this.color}\n
                 Type: ${this.type}`);
  }
}

class Car extends Automobile {
  constructor(name, color, type, engineCapacity, seatingCapacity, maxSpeed) {
    super(name, color, type);
    this.engineCapacity = engineCapacity;
    this.seatingCapacity = seatingCapacity;
    this.maxSpeed = maxSpeed;
  }

  displayInfo() {
    super.displayInfo();
    console.log(`Engine Capacity: ${this.engineCapacity}\n
                 Seating Capacity: ${this.seatingCapacity}\n
                 Max Speed: ${this.maxSpeed}`);
  }
}

class Truck extends Automobile {
  constructor(name, color, type, numOfWheels, maxSpeed) {
    super(name, color, type);
    this.numOfWheels = numOfWheels;
    this.maxSpeed = maxSpeed;
  }

  displayInfo() {
    super.displayInfo();
    console.log(`Number of Wheels: ${this.numOfWheels}\n
                 Max Speed: ${this.maxSpeed}`);
  }
}

class Bus extends Automobile {
  constructor(name, color, type, busType, numOfWheels) {
    super(name, color, type);
    this.busType = busType;
    this.numOfWheels = numOfWheels;
  }

  displayInfo() {
    super.displayInfo();
    console.log(`Bus Type: ${this.engineCapacity}\n
                 Number of Wheels: ${this.numOfWheels}`);
  }
}

function driverQ2() {
  let myCar = new Car(`Honda`, `White`, `Sedan`, 1800, 4, 150);
  myCar.displayInfo();
}
