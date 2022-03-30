export class InputCell {
  constructor(value) {
    this.value = value;
  }

  setValue(value) {
    this.value = value;
  }
}

export class ComputeCell {
  constructor(inputCells, fn) {
    this.inputCells = inputCells;
  }

  addCallback(cb) {}

  removeCallback(cb) {
    //
  }
}

export class CallbackCell {
  constructor(fn) {
    //
  }
}
