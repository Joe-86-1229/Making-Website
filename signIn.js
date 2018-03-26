var database = [
	{
		username: "user1",
		password: "password1"
	},
	{
		username: "user2",
		password: "password2"
	}
];

function isUserValid(username, password){
	for (let i = 0; i < database.length; i++){
		if(database[i].username === username && 
			database[i].password === password){
			return true;
		}
	}
	return false;
}

function signIn(username, password){
	if (isUserValid(username, password)){
		alert("login successfully");
	}else{
		alert("Wrong username or password");
	}
}

var userNamePrompt = prompt("Please input your username");
var passWordPrompt = prompt("Please input your password");

signIn(userNamePrompt, passWordPrompt);