class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      callback();
    }, 10);
  }

  getMinutes() {
    return Math.floor((this.currentTime / 60) / 100);
  }

  getSeconds() {
    return Math.floor((this.currentTime / 100) % 60);
  }

  getMilliseconds() {
    return this.currentTime % 100;
  }

  twoDigitsNumber(value) {
    return value < 10 ? "0" + value.toString() : value.toString();
  }

  stopClick() {
    clearInterval(this.intervalId);
  }
  
  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    return this.twoDigitsNumber(this.getMinutes()) + ":" + this.twoDigitsNumber(this.getSeconds()) + ":" + this.twoDigitsNumber(this.getMilliseconds());
  }
}
