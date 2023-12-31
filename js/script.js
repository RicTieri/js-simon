const clockDisplay = document.getElementById('clock');
const goalDay = new Date('Jan 1, 2024 00:00:00');

// creare un output con intervallo di un secondo
let clock = setInterval(function () {
  if (countDown(goalDay)) {
    clockDisplay.innerHTML = countDown(goalDay);
  } else {
    clockDisplay.innerHTML = 'Happy New Year';
    clearInterval(clock)
  }
},
  1000);



// calcolare quanto manca alla data prestabilita
function countDown(dayEvent) {
  let clockStart = new Date().getTime();
  let clockEnd = dayEvent.getTime();
  let expirationTime = clockEnd - clockStart;

  if (expirationTime < 0) {
    return false
  } else {
    let days = Math.floor(expirationTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor((expirationTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((expirationTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((expirationTime % (1000 * 60)) / 1000);
    return days + "d " + hours + "h " + minutes + "m " + seconds + "s";
  }
}