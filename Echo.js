window.onload=function(){
document.getElementsByTagName("article")[0].style.display ="block";
	var df = document.forms.changeArticle;
	var logArr = [];
	var eMail ="y.pavlyo@ukr.net";
	var logName = "Yura";
	var passWord ="happy";


	function getE(a){
		return document.getElementById(a);
	}

	for(var i=0; i< 3; i++){

			df.tabs[i].onclick=function(){
				for(var j=0; j< 3; j++){
					document.getElementsByTagName("article")[j].style.display ="none";
					if(df.tabs[j].checked){
						document.getElementsByTagName("article")[j].style.display ="block";
				}
			}
		}
	}

				var y = document.getElementsByClassName("colors")
				for(var j = 0; j < y.length; j++){
						y[j].onclick = function(){
					getE('personFoto').style.background = this.style.background;
					getE('personFoto').style.backgroundSize="cover";
				}
				}

df.submit.onclick = function(){
	logName = df.name.value
	eMail = df.e_mail.value
	if(df.password.value === df.password2.value)
	passWord = df.password.value;
	else
		alert("Password is not identical! Repeat please");
	getE("eMail").innerHTML = eMail;
	console.log(logArr);
}

df.btLogin.onclick = function autentification() {
	logArr =[];
	logArr[logName] = passWord;
if(logArr[df.Login.value] === df.Pasword.value){
	alert("WElCOME in our site");
}else{
	alert("Wrong password or login");
}
	console.log(logArr);
}

}