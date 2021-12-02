const emailElem = document.querySelector('#email');
const passwordElem = document.querySelector('#password');

const errorEmail = document.querySelector('.error-text_email');
const errorPassword = document.querySelector('.error-text_password');

const isRequired = value => value 
? undefined 
: 'Required';

const isEmail = value => value.includes('@')
? undefined 
: 'Should be an email';

const validatorsByField = {
	email: [isRequired, isEmail],
	password: [isRequired]
}

const validate = (fieldName, value) => {
	const validators = validatorsByField[fieldName];
	return validators
		.map(validator => validator(value))
		.filter(errorText => errorText)
		.join(', ');
}

const onEmailChange = event =>{
	const errorText = validate('email', event.target.value);
	errorEmail.textContent = errorText;
}

const onPasswordChange = event =>{
	const errorText = validate('password', event.target.value);
	errorPassword.textContent = errorText;
}

emailElem.addEventListener('input', onEmailChange);
passwordElem.addEventListener('input', onPasswordChange);

const formElem = document.querySelector('.login-form');

const onFormSubmit = event =>{
	event.preventDefault();
	
	const formFields = [...new FormData(formElem)]
	const formData = formFields.reduce(function (acc, formField) {
		const [prop, value] = formField; 
		return {...acc,[prop]: value,};}, {});

	alert(JSON.stringify(formData));
}

formElem.addEventListener('submit', onFormSubmit);


