// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    

    if (!alphabet || alphabet.length !== 26 ) return false;

    const alphabetNormal = "abcdefghijklmnopqrstuvwxyz"
    const alphabetArray = alphabetNormal.split("");

    let alphabetInputArray = alphabet.split("");

    let tempArray = [];
  
    for (let i = 0; i < alphabetInputArray.length; i ++) {
  
      if (tempArray.some((letter) =>{
       return alphabetInputArray[i] == letter; 
      }) )
      {        
        return false;
      }
      else{
        tempArray.push(alphabetInputArray[i]);
      }
    }

    input = input.toLowerCase();
    inputArray = input.split("");

    let cipher = [];

    if (encode == true){
      for (let i = 0; i < alphabetArray.length; i ++){
        cipher[alphabetArray[i]] = alphabet[i];

      }
    }

    if (encode == false){
      
      for (let i = 0; i < alphabetArray.length; i ++){
       cipher[alphabet[i]] = alphabetArray[i];
      }       
    }
    console.log(cipher);

    let result = inputArray.map((letter) => {
      if (letter === " ") {
        return " ";
      }
      else{
        return cipher[letter];
      }
    })
    return result.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };


