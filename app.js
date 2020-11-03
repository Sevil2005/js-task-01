const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const birthday = document.getElementById('birthday');
const email = document.getElementById('email');
const number = document.getElementById('number');
const subject = document.getElementById('subject');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
    const fnameValue = fname.value.trim();
	const lnameValue = lname.value.trim();
	const birthdayValue = birthday.value.trim();
    const emailValue = email.value.trim();
    const numberValue = number.value.trim();
    const subjectValue = subject.value;
    
    if(fnameValue === '') {
		setErrorFor(fname, 'First Name cannot be blank');
	} else {
		setSuccessFor(fname);
    }
    
    if(lnameValue === '') {
		setErrorFor(lname, 'Last Name cannot be blank');
	} else {
		setSuccessFor(lname);
    }

	if(birthdayValue === '') {
		setErrorFor(birthday, 'Birthday cannot be blank');
	} else {
		setSuccessFor(birthday);
    }
    
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(numberValue === '') {
		setErrorFor(number, 'Phone Number cannot be blank');
	} else {
		setSuccessFor(number);
    }
    
    if(subjectValue === '') {
		setErrorFor(subject, 'Subject cannot be blank');
	} else {
		setSuccessFor(subject);
    }
    console.log(lname, fname)
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
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}




