// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  var password = ""
  for (let i = 0; i < 10; ++i) {
    var index = Math.floor(Math.random() * lowercase.length);
    var char = lowercase[index]
    password = password + char





  }

  console.log(password)


  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
