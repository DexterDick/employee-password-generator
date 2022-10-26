// AS AN employee with access to sensitive data
// I WANT to randomly generate a password that meets certain criteria
// SO THAT I can create a strong password that provides greater security

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment code here

function lengthOfPassword() {
  // 1 . length min 8 characters max 128
  let numInput = prompt("Enter password 8 128 characters");

  // checks if it is a number
  while (isNaN(numInput)) {
    numInput = prompt("Enter password 8 128 characters");
  }
  // checks range of number
  while (numInput < 8 || numInput > 128) {
    numInput = prompt("Enter password 8 128 characters");
  }

  return numInput;
}

function characterTypes() {
  // 2. lowercase, uppercase, numeric, and/or special characters
  let lowerCase = confirm("Do you want lowercase in password");
  let upperCase = confirm("Do you want uppercase in password");
  let numeric = confirm("Do you want numbers in password");
  let special = confirm("Do you want special characters in password");

  return [lowerCase, upperCase, numeric, special];
}

function validateInput(arrChar) {
  // 3 . at least one character type should be selected after all input is entered.

  console.log(length, arrChar);
}

function generatePassword() {
  // 4. Generate password after all input validated
  let length = lengthOfPassword();
  let charChoice = characterTypes();
  let validated = validateInput(charChoice);
}

function displayPassword() {
  // 5. displayed in an alert or written to the page
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
