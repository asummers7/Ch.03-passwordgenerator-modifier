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
//Creating empty array to push the variables into if selected
var bucket = [] 

//creating a generate password function 
function generatePassword() {
  //this allows me create a window and log the password length and respond if too long or short
  var promptResponse = window.prompt("How many characters long would you like your password?")
  // this changes the string response into a number but also need to assign it to a new variable. 
  var passwordnumber = parseInt(promptResponse)
  console.log(passwordnumber) 
  console.log(promptResponse)
    // This is a common if else statement to run either window.alerts
    if (promptResponse < 8) {
      console.log("Password needs to be longer than 8 characters"),
      window.alert("Password needs to be longer than 8 characters")
      //this allows us to go back to beginning of function until criteria is met and not move on to the next if statement
      return generatePassword()
    } else if (promptResponse > 128) {
      console.log("Password needs to be less than 128 characters"),
      window.alert("Password needs to be less than 128 characters")
      return generatePassword()
    } 

  var specialcharconfirm = window.confirm("Would you like you password to include special characters?")
  var lowercaseconfirm = window.confirm("Would you like your password to include lowercase characters?")
  var Uppercaseconfirm = window.confirm("Would you like your password to include uppercase characters?")
  var numbersconfirm = window.confirm("Would you like your password to include numbers?")
 
    //the following are if statements to meet certain criteria of whether or not they want certain characters in their password

    if (lowercaseconfirm) {
      console.log(lowercaseconfirm)
      bucket.push(lowercase)
    } else {
      console.log(lowercaseconfirm)
      console.log("did not want lowercase characters in password")
    } 
  
    // another funcitonal if statement. 
    if (Uppercaseconfirm) {
      console.log(Uppercaseconfirm)
      bucket.push(uppercase) 
    } else {
      console.log(Uppercaseconfirm)
      console.log("Did not want uppercase characters in password")  
    }


    if (numbersconfirm) {
      console.log(numbersconfirm)
      bucket.push(numbers)
    } else {
      console.log(numbersconfirm)
      console.log("Did not want numbers in password")
    }
  

    if (specialcharconfirm) {
      console.log(specialcharconfirm)
      bucket.push(char) 
    } else {
      console.log(specialcharconfirm)
      console.log("Did not want special characters in password")
    }

  // This allows all the arrays to become one, however flat() is a function that creates a new array so we have to define a new variable for the array
  var newBucket = bucket.flat()
  console.log(newBucket) 
  // this variable is defined outside of for so that it can be used in the global scope of console.log and return on lines 93&95
  var actualPassword = ""
  // passwordnumber is not .length because its already a number not a string
  for (let i = 0; i < passwordnumber; i++) {
    //Math.floor is another function that creates a new string so you need to assign it to a new variable or redefine to a existing variable. 
    actualPassword += newBucket[Math.floor(Math.random() * newBucket.length)];
  }  
  
  console.log(actualPassword);
  //Posts the value to the window
  return actualPassword;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
