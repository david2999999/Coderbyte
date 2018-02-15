// Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. 
// If there are two or more words that are the same length, 
// return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 

function LongestWord(sen) { 
    sen = sen.replace(/[^a-zA-Z0-9]/g,'_');
    var arr = sen.split("_"), biggest = 0, index;

    for(var i = 0; i < arr.length; i++){
        if(arr[i].length > biggest){
            biggest = arr[i].length;
            index = i;
        }
    }
    
  return arr[index]; 
         
}