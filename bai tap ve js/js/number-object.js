var originaNumber = 10.23456;

var msg = '<h2>original number</h2><p>' + originaNumber + '</p>';

msg += '<h2>3 decimal places</h2><p>' + originaNumber.toFixed(3) + '</p>';
msg += '<h2>3 digits</h2><p>' + originaNumber.toPrecision(3) +'</p>';
var el = document.getElementById('info');
el.innerHTML = msg;