function logSubmit(event) {
  
  event.preventDefault();
  	const data = new FormData(event.target);
	const {email} = Object.fromEntries(data.entries());
	console.log(email);

	if(email === '') {
		console.log('empty!')
	} else if (!validateEmail(email)){
		console.log('does not look like an email')
	} else {
		console.log('success!')
	}
}

const form = document.getElementById("notification-form");

console.log(form, '<- form');

form.addEventListener("submit", logSubmit);


const validateEmail = (email) => {
	return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}