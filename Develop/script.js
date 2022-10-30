const numberOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialCharOptions = ["#", "$", "&", "*", "%", "&"];
// creates an array of 26 code to be used to generte upper and lower case characters
const characterCodes = Array.from(Array(26)).map((_, i) => i + 97);
const lowerCaseOptions = characterCodes.map((code) =>
  String.fromCharCode(code)
);

const upperCaseOptions = lowerCaseOptions.map((low) => low.toLocaleUpperCase());

function lengthOfPassword() {
  let numInputMsg =
    "Enter length of password. (must be 8 - 128 characters in length)";
  //***** */ 1 . length min 8 characters max 128
  let numInput = prompt(numInputMsg);

  // checks if it is a number
  while (isNaN(numInput)) {
    numInput = prompt(numInputMsg);
  }
  // checks range of number
  while (numInput < 8 || numInput > 128) {
    numInput = prompt(numInputMsg);
  }

  return numInput;
}

function characterTypes() {
  //****** 2. lowercase, uppercase, numeric, and/or special characters
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
  // ****** 3 . at least one character type should be selected after all input is entered.

  while (userInputChoice.length === 0) {
    alert("choose 1 item");
    generatePassword();
    return;
  }
  return userInputChoice;
}

function generatePassword() {
  //****** 4. Generate password after all input validated
  let length = lengthOfPassword();
  let charChoice = characterTypes();
  let userChoiceList = validateInput(charChoice);

  let password = "";

  for (let i = 0; i < length; i += 1) {
    // 1 get random list of user selection
    let rList = Math.floor(Math.random() * userChoiceList.length);
    console.log("list" + rList);
    // 2 choose random item from random list
    let rItem = Math.floor(Math.random() * (userChoiceList[rList].length - 1));
    console.log("item " + rItem);
    // 3 add to password string;
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
