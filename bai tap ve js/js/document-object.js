var msg = '<p><b>page title: </b>' + document.title + '<br />';
msg += '<p><b>last modified: </b>' + document.lastModified + '</p>';
msg += '<p><b>last modigied: </b>' + document.lastModified + '</p>';

var el = document.getElementById(  'footer');
el.innerHTML = msg;