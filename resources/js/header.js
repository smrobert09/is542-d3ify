document.title += ' - H';

var header = '<nav><ul><li><a href="#">Home-ology</a></li><li><a href="tech.html">Tech-ology</a></li><li><a href="#">Craft-ology</a></li><li><a href="#">Blog-ology</a></li><li><a href="about.html">Bio-ology</a></li><li><a href="getoff.html">Dare-ology</a></li><li><a href="getoff2.html">Dare-ology 2</a></li><li><a href="jquery.html">Jquer-ology</a></li></ul></nav>';
var insertHeader = function(){
	document.getElementsByTagName('header')[0].innerHTML = header;
}
insertHeader();
