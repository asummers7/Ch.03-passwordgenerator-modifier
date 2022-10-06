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
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var char = ["!", '@', '#', '$', '%', '&', '*', '?'];

//creating a generate password function 
function generatePassword() {
  //this allows me create a window and log the password length and respond if too long or short
  var promptResponse = window.prompt("How many characters long would you like your password?")
  var passwordnumber = parseInt(promptResponse)
  console.log(passwordnumber) 
  function charlengthconfirm () {
    console.log(promptResponse)
    if (promptResponse < 8) {
      console.log("Password needs to be longer than 8 characters"),
      window.alert("Password needs to be longer than 8 characters")
    } else if (promptResponse > 128) {
      console.log("Password needs to be less than 128 characters"),
      window.alert("Password needs to be less than 128 characters")
    } 
  }
  //calling the previous function to work 
  charlengthconfirm()

  //Creating empty array to push the variables into if selected


  //assigning another variable to help me run a future function 
  var lowercaseconfirm = window.confirm("Would you like your password to include lowercase characters?")
  function lowercaseRandom () {
    if (lowercaseconfirm) {
      console.log(lowercaseconfirm)
      var chosenpassword = [].concat(lowercase)
      console.log(chosenpassword)
    } else {
      console.log(lowercaseconfirm)
      console.log("did not want lowercase characters in password")
    } 
  } 
  //Calling the lowercaserandom function to work 
  lowercaseRandom()

  //assigning variable to use in a function
  var Uppercaseconfirm = window.confirm("Would you like your password to include uppercase characters?")
  function UppercaseRandom () {
    if (Uppercaseconfirm) {
      console.log(Uppercaseconfirm)
      var chosenpassword = [].concat(lowercase,uppercase) 
      console.log(chosenpassword) 
    } else {
      console.log(Uppercaseconfirm)
      console.log("Did not want uppercase characters in password")  
    }
  }
  //calling the function
  UppercaseRandom()
  
  //assigning variable to use in a function
  var numbersconfirm = window.confirm("Would you like your password to include numbers?")
  function numbersRandom () {
    if (numbersconfirm) {
      console.log(numbersconfirm)
      var chosenpassword = [].concat(lowercase,uppercase,numbers)
      console.log(chosenpassword)
    } else {
      console.log(numbersconfirm)
      console.log("Did not want numbers in password")
    }
  }
  //Calling the function 
  numbersRandom()

  //assigning variable to use in a function 
  var specialcharconfirm = window.confirm("Would you like you password to include special characters?")
  function specialcharRandom () {
    if (specialcharconfirm) {
      console.log(specialcharconfirm)
      var chosenpassword = [].concat(lowercase,uppercase,numbers,char)
      console.log(chosenpassword)
    } else {
      console.log(specialcharconfirm)
      console.log("Did not want special characters in password")
    }
  }
  //calling the function to execute
  specialcharRandom()
  
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
