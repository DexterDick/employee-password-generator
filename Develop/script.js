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

const numberOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialCharOptions = ["#", "$", "&", "*", "%", "&"];
// creates an array of 26 code to be used to generte upper and lower case characters
const characterCodes = Array.from(Array(26)).map((_, i) => i + 97);
const lowerCaseOptions = characterCodes.map((code) =>
  String.fromCharCode(code)
);

const upperCaseOptions = lowerCaseOptions.map((low) => low.toLocaleUpperCase());

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

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
  let userChoice = [];
  let lowerCase = confirm("Do you want lowercase in password");
  if (lowerCase) {
    userChoice.push(lowerCaseOptions);
  }
  let upperCase = confirm("Do you want uppercase in password");
  if (upperCase) {
    userChoice.push(upperCaseOptions);
  }
  let numeric = confirm("Do you want numbers in password");
  if (numeric) {
    userChoice.push(numberOptions);
  }
  let special = confirm("Do you want special characters in password");
  if (special) {
    userChoice.push(specialCharOptions);
  }

  return userChoice;
}

function validateInput(userInputChoice) {
  // 3 . at least one character type should be selected after all input is entered.

  while (userInputChoice.length === 0) {
    alert("choose 1 item");
    generatePassword();
    return;
  }
  return userInputChoice;
}

function generatePassword() {
  // 4. Generate password after all input validated
  let length = lengthOfPassword();
  let charChoice = characterTypes();
  let userChoiceList = validateInput(charChoice);

  // console.log(userChoiceList[0][getRandomNumber(0, 8)]);

  let password = "";

  for (let i = 0; i < length; i += 1) {
    // 1 get random list of user selection
    // 2 choose random item from random list
    // password += userChoiceList[i][getRandomNumber(0, userChoiceList.length)];
    // }
    // 3 add to password string;

    let rList = Math.floor(Math.random() * userChoiceList.length);
    console.log("list" + rList);

    // for (let j = 0; j < userChoiceList.length; j++) {
    let rItem = Math.floor(Math.random() * (userChoiceList[rList].length - 1));
    console.log("item " + rItem);

    password += userChoiceList[rList][rItem];
  }
  return password;
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
