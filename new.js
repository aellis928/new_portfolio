$(document).ready(function(){
	console.log('made it to the script.js!')
})

// this function is how the duties will display
var duties = ['Wife','Learner', 'Listener', 'Explorer', 'Creator', 'Team Player']
var i = 0
setInterval(function(){
	document
	.getElementById('on_hover')
	.innerHTML = duties[i++]
	if (i == duties.length) 
		i = 0;

}, 500);


function change_tab(event, tab_name){
	console.log(tab_name)
	var tabcontent, tablinks, i;

	tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

     tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    document.getElementById(tab_name).style.display = "block";
    event.currentTarget.className += " active";
}










