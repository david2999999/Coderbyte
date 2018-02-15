// Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. 
// Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
// Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 

function LetterChanges(str) { 
  
  str = str.split("");
  var str2 = [], nextLetter;
  
  for(var i = 0; i < str.length; i++){
      if(str[i].length === 1 && str[i].match(/[a-z]/i)){
            nextLetter = (parseInt(str[i], 36) + 1 ) % 36;
            str2[i] = (!nextLetter * 10 + nextLetter).toString(36);
      }else{
          str2[i] = str[i];
      }
      
      if((/^[aeiou]$/i).test(str2[i])){
          str2[i] = str2[i].toUpperCase();
      }

  }
  
  str2 = str2.join("");
  return str2; 
         
}