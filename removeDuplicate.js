//remove duplicate from string

// const removeDuplicate = (S) => {

//    const newString  = S.split("");
//    const removeDuplicate=  [...new Set(newString)]
//    return removeDuplicate.join("");
// }
// console.log(removeDuplicate("aaaaabbbbbb"));

// //Diagonal Difference

// function diagonalDifference(arr) {

//     let n = arr.length;
//     console.log(n)
//     let d1 = 0;
//     let d2 = 0;
//   for(let i=0; i<n; i++){
//            d1 += arr[i][i];

//             d2 += arr[i][n-1-i];

//       }

//   return Math.abs(d1 - d2);
// }

//  console.log(diagonalDifference( [[1,2,3],[4,5,6],[9,8,9]]))

//cipher

function ceaserCipher(str, num) {
  num = num % 26;
  console.log(num, "jhj");
  str = str.toLowerCase();

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const rotatedAlphabet = alphabet.slice(num) + alphabet.slice(0, num);

  let result = "";

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    let newChar = currentChar;

    if (alphabet.includes(currentChar)) {
      const index = alphabet.indexOf(currentChar);

      newChar = rotatedAlphabet[index];
    }
    result += newChar;
  }
  return result;
}
const input = "There’s-a-starman";
const output = ceaserCipher(input, 3);
