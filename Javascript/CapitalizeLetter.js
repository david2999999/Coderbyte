// Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. 
// Words will be separated by only one space. 

function LetterCapitalize(str) { 

    str = str.split(" ");
    
    for(var i = 0; i < str.length; i++){
        str[i] = str[i].split("");
        str[i][0] = str[i][0].toUpperCase();
        str[i] = str[i].join("");
    }
    
    str = str.join(" ");
  // code goes here  
  return str; 
         
}