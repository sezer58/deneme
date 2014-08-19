function DOMLoaded()
{

document.addEventListener("deviceready",phonegapLoaded,false);

}

function phonegapLoaded()
{
     $(function() {
	 
	 
	   $("body").append("<h1>DEVICE IS READY!</h1>");
	 
	 });
}