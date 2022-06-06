// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const encodeCipher = {
    a:'11', b:'21', c:'31', d:'41', e:'51',
    f:'12', g:'22', h:'32', i:'42', j:'42', k:'52',
    l:'13', m:'23', n:'33', o:'43', p:'53',
    q:'14', r:'24', s:'34', t:'44', u:'54',
    v:'15', w:'25', x:'35', y:'45', z:'55'
  };
  
  const decodeCipher = {
    11:'a', 21:'b', 31:'c', 41:'d', 51:'e',
    12:'f', 22:'g', 32:'h', 42:'(i/j)', 52:'k',
    13:'l', 23:'m', 33:'n', 43:'o', 53:'p',
    14:'q', 24:'r', 34:'s', 44:'t', 54:'u',
    15:'v', 25:'w', 35:'x', 45:'y', 55:'z'
  };
  function polybius(input, encode = true) {
    // your solution code here
    let result= "";  
    
    let key = "";

  if(encode == true){

    input = input.toLowerCase();

    inputArray = input.split("");

    inputArray.forEach((character) => {
      if (encodeCipher.hasOwnProperty(character)){

        key = encodeCipher[character]; 
      }
      else  {
        key = " ";
      }    

      result = result + key;
    })
    
  };

  if(encode == false){

    if(input.split(" ").join("").length % 2 == 1){return false};
    
    let inputNumberArray = input.split(" ");    

    console.log(inputNumberArray);

    inputNumberArray.forEach((numberWord) => {
     let inputNumberArrayKeys = numberWord.split("");

     console.log(inputNumberArrayKeys);

     let digitPairs = "";

     console.log(digitPairs);
     let decodeKey = [];

     for (var i = 0; i < inputNumberArrayKeys.length; i = i + 2){
       digitPairs =inputNumberArrayKeys[i] + inputNumberArrayKeys[i+1];


       decodeKey.push(digitPairs);
       console.log(decodeKey);
     }
     
     decodeKey.forEach((number) =>{
       let key = decodeCipher[number];

       console.log(key);

       result = result + key;
     })
     result +=" ";
    })    
  };

  console.log(result);
  return result.trim();

  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
