









// get value from input field
function getInput(inputId){
  let inputField = document.getElementById(inputId);
  const inputValue = parseFloat(inputField.value);
  inputField.value = "";
  return inputValue;
}
// deposit and withdraw update
function getPervious(fieldId, newVal){
  const getField = document.getElementById(fieldId);
  const previousValue = parseFloat(getField.innerText);
  getField.innerText = previousValue + newVal;

}
// total balance update
function getTotal(newVal, isAdd){
  let totalField = document.getElementById("totalBalance");
  const previousTotal = parseFloat (totalField.innerText);
  if(isAdd){
    totalField.innerText = previousTotal + newVal;
  }else{
    totalField.innerText = previousTotal - newVal;
  }
}
// deposit and withdraw conformation
function conformation(img, title, status){
  document.getElementById("confirmation").classList.remove("hidden");
  document.getElementById("comformation-img").src = img;
  document.getElementById("conformation-title").innerText = title;
  document.getElementById("status").innerText = status;
}

document.getElementById("deposit-submit").addEventListener("click", function(e){
  e.preventDefault();
  const newDeposit = getInput("deposit-input");
  if(newDeposit > 0){
    getPervious("deposit", newDeposit);
    getTotal(newDeposit, true);
    conformation("./img/depo.png", "Deposit", "Success !!!");
  }else{
    conformation("./img/failed.jpg", "Invalid deposit ammount", "Faild !!!");
  }
});

document.getElementById("withdraw-submit").addEventListener("click", function(e){
  e.preventDefault();
  const newWithdraw = getInput("withdraw-input");
  let totalField = document.getElementById("totalBalance");
  if(newWithdraw > 0 && parseFloat (totalField.innerText) > newWithdraw){
    getPervious("withdraw", newWithdraw);
    getTotal(newWithdraw, false);
    conformation("./img/withdraw.png", "Withdraw", "Done!!!");
  }
  else if((totalField.innerText) < newWithdraw){
    conformation("./img/failed.jpg", "Insufisiant Balance", "Faild !!!");
  }
  else{
    conformation("./img/failed.jpg", "Invalid withdraw ammount", "Faild !!!");
  }
});

document.getElementsByClassName("close")[0].addEventListener("click", () => {
  document.getElementById("confirmation").classList.add("hidden");
});