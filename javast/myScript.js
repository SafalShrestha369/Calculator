function c(val)
{
	document.getElementById('d').value=val;
}
function math(val) {
	// body...
	document.getElementById('d').value+=val;

}
function back()
{
	//clear the previous data
	  var value = document.getElementById("d").value;
    document.getElementById("d").value = value.substr(0, value.length - 1);
}

function e()
{
	try 
{ 
  c(eval(document.getElementById("d").value)) 
} 
catch(e) 
{
  c('Error') 
} 
}