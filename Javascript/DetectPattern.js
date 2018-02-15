// Have the function SimpleSymbols(str) take the str parameter being passed and determine
// if it is an acceptable sequence by either returning the string true or false. The str parameter will be
// composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be
// true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be
// empty and will have at least one letter. 


function SimpleSymbols(str) { 

    if(str[0].match(/[a-z]/i)){
        return false;
    }
      
  var boolean;
  var format = /[+]+/;
  str = str.split("");
  
  for(var i = 1; i < str.length; i++){

      
      if(str[i].match(/[a-z]/i)){
        if(format.test(str[i - 1]) && format.test(str[i + 1])){
            continue;
        }else{
            return false;
        }
      }
  }
  
  return true;
         
}