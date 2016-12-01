// plik scripts.js

var list = document.getElementById('Lista'),
	add = document.getElementById('addElem'),
	howMuchLi = document.getElementsByTagName('li');
	
	
	
add.addEventListener('click', function() {
	list.innerHTML += '<li>item ' + howMuchLi.length + ' </li>';
});