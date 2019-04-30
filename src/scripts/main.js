// Timer end date
let endDate = new Date('Jun 5, 2019 00:00:00').getTime()

// Timer
let timer = setInterval(() => {
  let currentTime = new Date().getTime();
  let t = endDate - currentTime

  let days = Math.floor(t / (1000 * 60 * 60 * 24))
  let hours = Math.floor(t % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
  let minutes = Math.floor(t % (1000 * 60 * 60) / (1000 * 60))
  let seconds = Math.floor(t % (1000 * 60) / 1000)
  
  if (t >= 0) {
    document.getElementById('timer-days').innerHTML = days + '<span class="label"> Day(s)</span>'
    document.getElementById('timer-hours').innerHTML = ('0' + hours).slice(-2) + '<span class="label"> Hr(s)</span>'
    document.getElementById('timer-minutes').innerHTML = ('0' + minutes).slice(-2) + '<span class="label"> Min(s)</span>'
    document.getElementById('timer-seconds').innerHTML = ('0' + seconds).slice(-2) + '<span class="label"> Secs(s)</span>'
  } else {
    document.getElementById('timer').innerHTML = 'The countdown is over!'
  }
  // change color based on remaining time
  if (days <= 5) {
    document.getElementById('timer').style.color = 'red'
  } else if (days <=10) {
    document.getElementById('timer').style.color = 'orange'
  } else {
    document.getElementById('timer').style.color = 'green'
  }

}, 1000)
