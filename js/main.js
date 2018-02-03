// Copyright _iPhoenix_
var interval, isRunning = true;
window.onload = function () {
  interval = setInterval(function () {
    var elements = document.getElementsByClassName('rainbow');
    for (var i = 0; i < elements.length; i++) {
      var span = elements[i];
      var length = span.innerText.length;
      var offset = span.id++;
      span.id %= length + 1;
      var innerString = '';
      var length = span.innerText.length;
      span.innerText.split('').forEach(function (char, index) {
        var h = Math.floor((360 * (index + offset)) / length) % 360;
        innerString += '<span style="color: hsl(' + h + ', 100%, 50%);">' + char + "</span>";
      });
      span.innerHTML = innerString;
    }
  }, 50);
}

function toggleRainbow() {
  if (isRunning) {
    clearInterval(interval)
    var elements = document.getElementsByClassName('rainbow');
    for (var i = 0; i < elements.length; i++){
      elements[i].innerHTML = elements[i].innerText;
    }
  } else {
    interval = setInterval(function () {
    var elements = document.getElementsByClassName('rainbow');
    for (var i = 0; i < elements.length; i++) {
      var span = elements[i];
      var length = span.innerText.length;
      var offset = span.id++;
      span.id %= length + 1;
      var innerString = '';
      var length = span.innerText.length;
      span.innerText.split('').forEach(function (char, index) {
        var h = Math.floor((360 * (index + offset)) / length) % 360;
        innerString += '<span style="color: hsl(' + h + ', 100%, 50%);">' + char + "</span>";
      });
      span.innerHTML = innerString;
    }
  }, 50);
  }
  isRunning = !isRunning;
  var button = document.getElementsByTagName("input")[0];
  button.classList = isRunning ? "on" : "off"
}
