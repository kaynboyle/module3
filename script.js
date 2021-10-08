// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// cardEl = document.getElementByClass('card-body');

//  alert type? select? 
// when you ask for what length of the password you want should it be a number you type in?
// 
///////////////////////////
// var userans1 = the users answer
// while (userans1 < 8){
//   alert /  choose again
// }
// if (128>userans >8){
//   console.log(userq2)
// }
////////////////////////////////////////////////////////
// 
// this was working but now its not anymore
var ucset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lcset = 'abcdefghijklmnopqrstuvwxyz';
var numeset = "1234567890";
var specset ="!@#$&?";
var possibilities = "";


var generatePassword = function() {
  var userq1 = parseInt(prompt("How long do you want your password to be?"));
  // include if the answer isn't an int
  while (userq1 > 128 || userq1 < 8){
    alert("Hey you messed up! Do it again")
    userq1 = prompt("How long do you want your password to be?");
  }
  // document.write("Your password will be "+userq1+" characters long")
  var lc = confirm("Do you want to include lowercase letters?");
  //document.write("Your password will include "+userq2+" characters")
  var uc = confirm("Do you want to include uppercase letters?");
  var nume = confirm("Do you want to include numeric characters?");
  var spec = confirm("Do you want to include special characters?");
  // would the promt for this be multiple choice? or do you ask do you want lower case y/n do you want special characters? cancel or confirm
  // at least 

  if (lc) {
    possibilities += lcset;
  }
  if (uc) {
    possibilities += ucset;
  }
  if (nume) {
    possibilities += numeset;
  }
  if (spec) {
    possibilities += specset;
  }

  var password = "";
  for (i=0; i < userq1; i++){
    // add a character from the character set that is allowed
    // if (uc = continue){
    //   charsetlist.append(ucset)
    // }

    //create random number in the possibility range
    var randomNum = Math.floor(Math.random() * (possibilities.length));
    //conver the rnadom number into possibility characters and
    var char = possibilities[randomNum];
    //contruct a password
    password += char;
  }

  return password
  
}
