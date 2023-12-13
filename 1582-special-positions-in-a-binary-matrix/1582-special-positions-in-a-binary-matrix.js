/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
  let rtn = 0 ;  
  for(let i = 0 ; i < mat.length ; i++){
    for(let j = 0 ; j < mat[i].length; j++){
      if(mat[i][j] == 1){ // position of special num
        if( mat[i].reduce((perv, cur) => perv + cur) == 1 //check row
           && mat.map( arr =>  arr[j] ).reduce((perv, cur) => perv + cur) ==1 )  //check col
        rtn+=1
        else break ; 
      }
    }
  }
  return rtn ; 
};