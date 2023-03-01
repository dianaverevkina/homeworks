class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!(time && callback)) {
      throw new Error('Отсутствуют обязательные аргументы');
    }
    if (this.alarmCollection.some(obj => obj.time === time)) {
      console.warn('Уже присутствует звонок на это же время');
    }

    this.alarmCollection.push({callback, time, canCall: true});
  }

  removeClock(time) {
    return this.alarmCollection = this.alarmCollection.filter(obj => obj.time !== time);
  }

  getCurrentFormattedTime() {
    const hours = new Date().getHours().toString().padStart(2, "0");
    const minutes = new Date().getMinutes().toString().padStart(2, "0")
    return  `${hours}:${minutes}`;
  }

  start() {
    if(this.intervalId !== null) {
      return;
    }

    const opportunityOfCall = () => {
      this.alarmCollection.forEach(obj => {
        if (obj.time === this.getCurrentFormattedTime() && obj.canCall === true) {
          obj.canCall = false;
          return obj.callback(); 
        }
      })
    }

    this.intervalId = setInterval(opportunityOfCall, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach(obj => obj.canCall = true);
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
