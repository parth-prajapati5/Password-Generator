
function generatePassword(lowercase, uppercase, numbercase, symbolscase, length) {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:',.<>?"
    
    let characterPool = ""

    if (lowercase) {
        characterPool += lower;
    }
    if (uppercase) {
        characterPool += upper;
    }
    if(numbercase){
  characterPool += number;
    }
    if(symbolscase){
        characterPool += symbols;
    }
    if(length <=0){
        alert("password  length must be at least 1");
    }
  let password="";
    for (let index = 0; index < length; index++) {
    const randomIndex=Math.floor(Math.random() * characterPool.length);
    password +=characterPool[randomIndex];
    }
    return password;
}

document.getElementById("generate-btn").onclick= () => {
    const passwordlength = parseInt(document.getElementById("number").value);
    const includeUppercase = document.querySelector("#toggle1").checked;
    const includeLowercase = document.querySelector("#toggle2").checked;
    const includeNumbers = document.querySelector("#toggle3").checked;
    const includeSymbols = document.querySelector("#toggle4").checked;
    if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols) {
        alert("Please select at least one character type!");

    }
    const password = generatePassword(includeLowercase, includeUppercase, includeNumbers, includeSymbols, passwordlength);

    const passwordDisplay = document.querySelector(".Password p");
    passwordDisplay.textContent = password || "Click Generate";

};