// Have the function MaximalSquare(strArr) take the strArr parameter being passed which will be a 2D matrix of 0 and 1's, 
// and determine the area of the largest square submatrix that contains all 1's. A square submatrix is one of equal width 
// and height, and your program should return the area of the largest submatrix that contains only 1's. 
// For example: if strArr is ["10100", "10111", "11111", "10010"] then this looks like the following matrix: 

function MaximalSquare(strArr) { 
  var row = strArr.length + 1,
      col = strArr[0].length + 1;
  var tempArr, maxBlock = 0;
  
  tempArr = Array(row).fill().map(function(){
      return Array(col).fill(0);
  });

  for(var i = 1; i <= strArr.length; i++){
      for(var j = 1; j <=  strArr[0].length; j++){
          if(strArr[i-1][j-1] == '1'){
              tempArr[i][j] = Math.min( Math.min(tempArr[i][j-1], tempArr[i-1][j]) , tempArr[i-1][j-1] ) + 1;
              maxBlock = Math.max(tempArr[i][j], maxBlock);
          }
      }
  }
  
  return Math.pow(maxBlock, 2); 
         
}