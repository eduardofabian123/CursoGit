function saludo(){
	alert("Hola mundo");
}

function getUserByName(username, password){
	$.ajax(
	{
		url:'',
		method:'POST',
		data:{
			username: username,
			password: password
		}, function beforeSend(){
		}, function success(data){
			console.log(data);
		}, function error(ex) {
			console.log(ex);
		}
	});

}