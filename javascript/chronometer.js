class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.millisecondsTime = 0;
    this.intervalId = 0;
    this.millisecondsIntervalId = 0;
  }

  startClick(callback) {
    this.millisecondsIntervalId = setInterval(() => this.millisecondsTime += 1, 10);
    this.intervalId = setInterval(() => this.currentTime++, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  getMilliseconds() {
    return this.millisecondsTime % 100;
  }

  twoDigitsNumber(value) {
    return value < 10 ? "0" + value.toString() : value.toString();
  }

  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.millisecondsIntervalId);
  }
  
  resetClick() {
    this.currentTime = 0;
    this.millisecondsTime = 0;
  }

  splitClick() {
    return this.twoDigitsNumber(this.getMinutes()) + ":" + this.twoDigitsNumber(this.getSeconds()) + ":" + this.twoDigitsNumber(this.getMilliseconds());
  }
}
