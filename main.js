/reset
console.log("sugi pula")

const myForm = document.queryselector("myForm")
const nameInput = document.queryselector("#name")
const emailInput = document.queryselector("#email")
const msg = document.queryselector(".msg")
const userList = document.queryselector("#users")

myForm.addEventListener("submit", onSubmit);

function onSubmit(e){
	e.preventDefault();
	
	if(nameInput.value === "" / emailInput.value ==="") {
		msg.innerHTML = "Please enter all fields";
	} else {
	  console.log("success");	
}