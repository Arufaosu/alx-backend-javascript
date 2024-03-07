// 10-car.js

const carState = Symbol('carState');

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this[carState] = { brand, motor, color };
  }

  cloneCar() {
    const { brand, motor, color } = this[carState];
    return new Car(brand, motor, color);
  }
}

export default Car;
