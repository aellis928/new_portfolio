$(document).ready(function(){
	console.log('made it to the script.js!')
})

// this function is how the duties will display
var duties = ['Wife', 'Mother', 'Daughter', 'Sister', 'Tennis Player', 'Avid Reader', 'Runner', 'Learner', 'Listener', 'Explorer']
var i = 0
setInterval(function(){
	document
	.getElementById('on_hover')
	.innerHTML = duties[i++]
	if (i == duties.length) 
		i = 0;

}, 500);


function change_tabs(){
	console.log('hi')
	var i;
	var tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
    	console.log('hello')
        tabcontent[i].style.display = "none";
    }
}

change_tabs();









