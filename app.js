const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const birthday = document.getElementById('birthday');
const email = document.getElementById('email');
const number = document.getElementById('number');
const subject = document.getElementById('subject');
const btn = document.getElementById('btn')
const modalDiv = document.getElementById('modal-close-default');

btn.addEventListener('click', function(e) {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
    const fnameValue = fname.value;
	const lnameValue = lname.value;
	const birthdayValue = birthday.value;
    const emailValue = email.value;
    const numberValue = number.value;
	const subjectValue = subject.value;
	var check1 = false;
	var check2 = false;
	var check3 = false;
	var check4 = false;
	var check5 = false;
	var check6 = false;

    if(fnameValue === '') {
		setErrorFor(fname, 'First Name cannot be blank');
		check1 = false;
	} else {
		setSuccessFor(fname);
		check1 = true;
    }
    
    if(lnameValue === '') {
		setErrorFor(lname, 'Last Name cannot be blank');
		check2 = false;
	} else {
		setSuccessFor(lname);
		check2 = true;
    }

	if(birthdayValue === '') {
		setErrorFor(birthday, 'Birthday cannot be blank');
		check3 = false;
	} else {
		setSuccessFor(birthday);
		check3 = true;
    }
    
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
		check4 = false;
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
		check4 = false;
	} else {
		setSuccessFor(email);
		check4 = true;
	}
	
	if(numberValue === '') {
		setErrorFor(number, 'Phone Number cannot be blank');
		check5 = false;
	} else {
		setSuccessFor(number);
		check5 = true;
    }
    
    if(subjectValue === '') {
		setErrorFor(subject, 'Subject cannot be blank');
		check6 = false;
	} else {
		setSuccessFor(subject);
		check6 = true;
    }
	 
	if (check1 && check2 && check3 && check4 && check5 && check6){
		btn.setAttribute("uk-toggle", "target: #modal-close-default");
		
		modal = document.querySelector(".uk-modal-body")

		var data1 = document.createElement("p")
		data1.innerHTML = `Your First Name: ${fnameValue}`;

		var data2 = document.createElement("p")
		data2.innerHTML = `Your Last Name: ${lnameValue}`;

		var data3 = document.createElement("p")
		data3.innerHTML = `Your Email: ${emailValue}`;

		var data4 = document.createElement("p")
		data4.innerHTML = `Your Subject: ${subjectValue}`;

		modal.appendChild(data1);
		modal.appendChild(data2);
		modal.appendChild(data3);
		modal.appendChild(data4);
	}
	else{
		btn.removeAttribute("uk-toggle");
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
	
function isEmail(email) {
	if (email.includes("@")){
		return true;
	}else{
		return false;
	}
}
