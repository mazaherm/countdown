// Timer end date
let endDate = new Date('Jun 5, 2019 00:00:00').getTime()

// Timer
let timer = setInterval(() => {
  let currentTime = new Date().getTime();
  let t = endDate - currentTime

  if (t >= 0) {
    let days = Math.floor(t / (1000 * 60 * 60 * 24))
    let hours = Math.floor(t % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    let minutes = Math.floor(t % (1000 * 60 * 60) / (1000 * 60))
    let seconds = Math.floor(t % (1000 * 60) / 1000)

    document.getElementById('timer-days').innerHTML = days + '<span class="label"> Day(s)</span>'
    document.getElementById('timer-hours').innerHTML = ('0' + hours).slice(-2) + '<span class="label"> Hr(s)</span>'
    document.getElementById('timer-minutes').innerHTML = ('0' + minutes).slice(-2) + '<span class="label"> Min(s)</span>'
    document.getElementById('timer-seconds').innerHTML = ('0' + seconds).slice(-2) + '<span class="label"> Secs(s)</span>'
  } else {
    document.getElementById('timer').innerHTML = 'The countdown is over!'
  }
}, 1000)
