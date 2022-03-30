var counterInterval;
var getting_minute;
var counter = 120;
var seconds;
var minutes;

const Start = function() {
  document.getElementById("Starting").disabled = true;
  document.getElementById("Pousing").disabled = false;
  counterInterval = setInterval(function(){
    counter -= 1;
    seconds = counter % 60;
    minutes = counter / 60;
    getting_minute =  minutes.toString().substr(0, 1)
    if (seconds < "10" || seconds == 0){
      seconds = "0" + seconds
    }
    var result = "0" + getting_minute + ":" + seconds;
    document.getElementById("counter").innerHTML = result; 
  }, 1000);
};

const Pouse = function() {
  clearInterval(counterInterval)
  document.getElementById("Starting").disabled = false
  document.getElementById("Pousing").disabled = true
};

const Restart = function() {
  document.getElementById("counter").innerHTML = "02:00"; 
  clearInterval(counterInterval)
  counter = 120
  Start()
}
