// import Countdown from "./countdown.js";

// const tempoParaNatal = new Countdown('24 December 2025 23:59:59 GMT-03:00')
// console.log(tempoParaNatal)
// console.log(tempoParaNatal.total)

class Countdown {
  constructor(futureDate) {
    this.futureDate = futureDate
    this.timeDiff = new Date(futureDate).getTime() - new Date().getTime()
  }
  get _actualDate() {
    return new Date()
  }
  get _futureDate() {
    return new Date(this.futureDate)
  }
  get _timeStampDiff() {
    return this._futureDate.getTime() - this._actualDate.getTime()
  }
  get days() {
    return Math.floor(this.timeDiff / (24 * 60 * 60 * 1000))
  }
  get hours() {
    return Math.floor(this.timeDiff / (60 * 60 * 1000))
  }
  get minutes() {
    return Math.floor(this.timeDiff / (60 * 1000))
  }
  get seconds() {
    return Math.floor(this.timeDiff / 1000)
  }
  get total() {
    const days = this.days
    const hours = this.hours % 24
    const minutes = this.minutes % 60
    const seconds = this.seconds % 60
    return {
      days,
      hours,
      minutes,
      seconds
    }
  }
}
const tempoParaNatal = new Countdown('24 December 2025 23:59:59 GMT-03:00')
const a = tempoParaNatal.total