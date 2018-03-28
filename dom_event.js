let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");


function toggleLineThrough(){
	let li = document.querySelectorAll("li");
	for (let i = li.length - 1; i >= 0; i--) {
		li[i].addEventListener("click", toggleDone);
		addDelButton(li[i]);
	}
}

function addDelButton(li){
	let delButton = document.createElement("button");
	delButton.textContent = "Delete";
	li.appendChild(delButton);
	delButton.addEventListener("click",deleteElement);
}

function deleteElement(){
	//remove list element
	ul.removeChild(this.parentNode);
}

function toggleDone(){
	this.classList.toggle("done");
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.addEventListener("click", toggleDone);
	addDelButton(li);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

toggleLineThrough();