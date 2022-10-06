// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//adding my variables as arrays with the values
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [1 , 2, 3, 4 , 5, 6, 7, 8, 9];
var char = ["!", '@', '#', '$', '%', '&', '*', '?'];

//creating a generate password function 
function generatePassword() {
  var promptResponse = window.prompt("How many characters long would you like your password?")
  console.log(promptResponse)
  if (promptResponse < 8) {
      console.log("Password needs to be longer than 8 characters"),
      window.alert("Password needs to be longer than 8 characters")
  } else if (promptResponse > 128) {
      console.log("Password needs to be less than 128 characters"),
      window.alert("Password needs to be less than 128 characters")
  } else {
      console.log("Need a password length amount")
      window.alert("Need a password length amount")
  }
  


  window.confirm("Would you like your password to include lowercase characters?")
  window.confirm("Would you like your password to include uppercase characters?") 
  window.confirm("Would you like your password to include numbers?")
  window.confirm("Would you like you password to include special characters?")


}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
