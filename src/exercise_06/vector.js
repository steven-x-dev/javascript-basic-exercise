export default class Vector {
  // This class represents a 2-dimensional vector. Please implement the class according to the
  // following instructions:
  //
  // * We should be able to get the `x` part and `y` part of a vector.
  // * We should be able to calculate the plus and minus of 2 vectors.
  // * We should be able to calculate the distance of a vector.
  //
  // Your target:
  //
  // * Please implement the class and pass all the tests in vector_spec.js.
  // * Please do NOT modify the signature of the class. Please put all your code in the Vector
  // class.

  constructor(x, y) {
    this._x = x;
    this._y = y;
  }

  get x() {
    return this._x;
  }

  set x(x) {
    this._x = x;
  }

  get y() {
    return this._y;
  }

  set y(y) {
    this._y = y;
  }

  get getDistance() {
    return Math.sqrt(this._x * this._x + this._y * this._y);
  }

  distance() {
    return Math.sqrt(this._x * this._x + this._y * this._y);
  }

  static plus(v1, v2) {
    return new Vector(v1._x + v2._x, v1._y + v2._y);
  }

  static minus(v1, v2) {
    return new Vector(v1._x - v2._x, v1._y - v2._y);
  }
}
