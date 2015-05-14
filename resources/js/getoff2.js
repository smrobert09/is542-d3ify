

var startModal = function(){
	document.getElementById('popup').style.display = 'block';
}

var redirectorYes = function(){
	redirector(true);
}

var redirectorNo = function(){
	redirector(false);
}

var redirector = function(extended){
	if(extended){
		document.getElementById('popup').style.display = 'none';
		window.setTimeout(startModal, 10000);
	}else{
		window.location = 'https://www.google.com/';
	}
}

document.getElementById('extendYes').addEventListener('click', redirectorYes);
document.getElementById('extendNo').addEventListener('click', redirectorNo);
window.setTimeout(startModal, 10000);