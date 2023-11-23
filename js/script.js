// ottenere i dati di data e ora attuali
const goalDay = new Date('Jan 1, 2024 00:00:00');

// creare un output con intervallo di un secondo
setInterval(countDown,
1000, goalDay)

// calcolare quanto manca alla data prestabilita
function countDown(dayEvent){
  let clockStart = new Date().getTime();
  let clockEnd = dayEvent.getTime();
  let expirationTime = clockEnd - clockStart;
  return console.log(expirationTime)
}