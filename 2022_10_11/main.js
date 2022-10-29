const firstName = document.getElementById('first_name')
const lastName = document.getElementById('last_name')
const age = document.getElementById('age')
const email = document.getElementById('email')
const emailConfirmation = document.getElementById('email_confirmation')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('password_confirmation')
const termsAndConditions = document.getElementById('terms_and_conditions')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const regEx = /[a-zA-Z\d.\-_]+@[a-zA-Z\d]+\.[a-zA-Z\d]{2,5}/i;

form.addEventListener('submit', (e) => {
  let messages = []
  if (firstName.value === '' || firstName.value == null ) {
    messages.push('First name is required')
  }

  if (firstName.value.length < 3 ) {
    messages.push('Your first name is too short')
  }

  if (lastName.value === '' || lastName.value == null) {
    messages.push('Last name is required')
  }

  if (age.value === '' || lastName.value == null) {
    messages.push('Age is required')
  }

  if (age.value < 18) {
    messages.push('You must be over 18 to sign up')
  }

  if (!regEx.test(email.value)) {
    messages.push("Your email doesn't fit the usual rules")
  }

  if (email.value != emailConfirmation.value) {
    messages.push("Your email and your email confirmation don't match")
  }

  if (password.value.length < 6) {
    messages.push('Password must be longer than 6 characters')
  }

  if (password.value != passwordConfirmation.value) {
    messages.push("Your password and your password confirmation don't match")
  }

  if (!termsAndConditions.checked) {
    messages.push("You didn't accept the terms and conditions")
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})