alert ( 'hello Marfh' );

console.log ('a');


const form = document.getElementById('form');
const username = document.getElementById('fname');
const email = document.getElementById('lname');
const password = document.getElementById('mail');
const password2 = document.getElementById('country');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const fnameValue = fname.value.trim();
	const lnameValue = lname.value.trim();
	const mailValue = mail.value.trim();
	const countryValue = country.value.trim();
	
	if(fnameValue === '') {
		setErrorFor(fname, 'fname cannot be blank');
	} else {
		setSuccessFor(fname);
	}
	
	if(lnameValue === '') {
		setErrorFor(lname, 'lname cannot be blank');
	} else {
		setSuccessFor(lname);
	}
	
	if(mailValue === '') {
		setErrorFor(mail, 'mail cannot be blank');
	}  else if (!ismail(mailValue)) {
		setErrorFor(mail, 'Not a valid mail');
	} else {
		setSuccessFor(mail);
	}
	
	if(countryValue === '') {
		setErrorFor(country, 'country cannot be blank');
	} else{
		setSuccessFor(country);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function ismail(mail) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});
