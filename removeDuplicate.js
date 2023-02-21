
//remove duplicate from string


const removeDuplicate = (S) => {
  
   const newString  = S.split("");
   const removeDuplicate=  [...new Set(newString)]
   return removeDuplicate.join("");
}
console.log(removeDuplicate("aaaaabbbbbb"));


//Diagonal Difference 

// function diagonalDifference(arr) {
//     var n = arr.length; 
//     var d1 = 0;
//     var d2 = 0;
//   for(var i=0; i<n; i++){
//      for(var j=0; j<n; j++){
//        // finding the sum of primary diagonal
//          if(i === j) {
//            d1 += arr[i][j];
//          }
//        // finding the sum of secondary diagonal
//          if(i + j === n - 1){
//             d2 += arr[i][j];
//          }
//       }
//   }
//   return d1 - d2;
// }

// diagonalDifference( [[2,1,4],[5,1,2],[3,1,9]])








