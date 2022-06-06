// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
 
  function caesar(input, shift, encode = true) {
    // your solution code here

    if (!shift || shift == 0 || shift < -25 || shift > 25 ) {
      return false;
    }

    if (encode == false){
      shift = shift * -1;
    }  

    let text = input.toLowerCase();
    
    const textArray = text.split("");

    let result ="";    

    textArray.forEach((letter) => {
      let code = letter.charCodeAt();
     
      //check character is a - z (97 - 122)
      if (code >= 97 && code <= 122){
      
      code += shift
      
      if (code > 122) {
        code = code - 26;
      }
      if (code < 97) {
        code = code + 26;
      }
    }

    result = result + String.fromCharCode(code);

      console.log(String.fromCharCode(code));
    })

    return result;
  }  

  return {
    caesar,
  };
})();

 /*UTF - 16 reference:
  charCodeAt : takes character and returns number
  fromCharCode : takes number and returns character
  97 = a
  98 = b
  99 = c
  100 = d
  101 = e
  102 = f
  103 = g
  104 = h
  105 = i
  106 = j
  107 = k
  108 = l
  109 = m
  110 = n
  111 = o
  112 = p
  113 = q
  114 = r
  115 = s
  116 = t
  117 = u
  118 = v
  119 = w
  120 = x
  121 = y
  122 = z
  */


module.exports = { caesar: caesarModule.caesar };
