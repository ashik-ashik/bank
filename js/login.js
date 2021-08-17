
 document.getElementById("login").addEventListener("click", (e) => {
   e.preventDefault();

  //  take user-email and user-password
   let userEmail = document.getElementById("userEmail").value;
   let userPassword = document.getElementById("userPassword").value;

  //  pass email and password for checking validation
   const isEmailPassValid = validation(userEmail, userPassword);

  //  let's log in;
   if(isEmailPassValid){
     window.location.replace("./bank.html");
   }
 });

// check email and password is valid formated or not
 function validation(email, pass){

  // pass email for validation
  const validEmail = checkEmail(email);

  //  pass password for validation
   const validPassword = checkPassword(pass);

  //  match email and password for login
   if((validEmail && (email == "baapbeta@bank.com")) && (validPassword && (pass == "baapBeta#420"))){
     return true;
   }
   else{
     return false;
   }


 }

//  show error messages
 document.getElementById("userPassword").addEventListener("input", (e)=>{checkPassword (e.target.value)});
 document.getElementById("userPassword").addEventListener("focus", ()=>{errorMessage (true)});
 document.getElementById("userPassword").addEventListener("blur", ()=>{errorMessage (false)});


//  email error
 function errorEmail(x){
  if(x){
    document.getElementById('emailErr').classList.remove("hidden");
   }else{
    document.getElementById('emailErr').classList.add("hidden");
   }
 }

//  password error
 function errorMessage (x) {
   if(x){
    document.getElementById('password-error').classList.remove("hidden");
   }else{
    document.getElementById('password-error').classList.add("hidden");
   }
 }


//  check email function
function checkEmail(email){
  // email format parameters
  const isAtdaret = email.indexOf("@");
  const isDot = email.lastIndexOf(".");
  const isSymbol = email.match(/[!#$%^&*?><]/);

  let eamilError = document.getElementById('emailErr');

  if(email.length == 0){
    eamilError.innerText = "Email cannot be empty!";
  }

  // is email formated?
  if((isAtdaret > 1) && (isDot > isAtdaret + 2) && !isSymbol){
    errorEmail (false);
   return true;
  }else{
    errorEmail (true);
    if(email.length == 0){
      eamilError.innerText = "Email cannot be empty!";
    }else{
      eamilError.innerText = "Invalid Email !!!";
    }
    if((isAtdaret == -1) && (email.length > 1)){
      eamilError.innerText = "Email should contain @"
    }
  
    return false;
  }


}


//  check password validation

 function checkPassword(pass){

  //  password formation parameter
  const isLetter = pass.match(/[a-z]/);
  const isUppercase = pass.match(/[A-Z]/);
  const isNumber = pass.match(/[0-9]/);
  const isSymbol = pass.match(/[!@#$%^&*?><]/);
  const isLength = pass.length >= 8;

  // show into error box passwors status
  if(isLetter){
    selectId("letters", "add");
  }else{
    selectId("letters", "remove");
  }

  if(isUppercase){
    selectId("uppercase", "add");
  }else{
    selectId("uppercase", "remove");
  }

  if(isNumber){
    selectId("number", "add");
  }else{
    selectId("number", "remove");
  }

  if(isSymbol){
    selectId("special", "add");
  }else{
    selectId("special", "remove");
  }

  if(isLength){
    selectId("length", "add");
  }
  else{
    selectId("length", "remove");
  }

// is passwors well formed?
  if(isLetter && isUppercase && isNumber && isSymbol && isLength){
   errorMessage (false);
   return true;
  }else{
   errorMessage (true);
   return false;
  }
 }


//  selected id by cuntion and add new class

function selectId(whice, what){
  if(what == "add"){
    return document.getElementById(`${whice}`).classList.add("ok");
  }else if(what == "remove"){
    return document.getElementById(`${whice}`).classList.remove("ok");
  }
}

document.getElementById("password-show").addEventListener("change", (e) => {
  if(e.target.checked){
    document.getElementById("userPassword").type = "text";
    document.getElementById("eye-icon").classList.add("fa-eye-slash");
    document.getElementById("eye-icon").classList.remove("fa-eye");
  }else{
    document.getElementById("userPassword").type = "password";
    document.getElementById("eye-icon").classList.remove("fa-eye-slash");
    document.getElementById("eye-icon").classList.add("fa-eye");
  }
})
