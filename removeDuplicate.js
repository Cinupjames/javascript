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


const candles=[4,4,1,3]
const max_height= Math.max(...candles)
console.log(max_height)
const count  =candles.filter(candle=>candle===max_height).length
console.log(count,"count")






console.log("sum key");

const budget =60
const keyboard =[40,60,50]
const drive =[5,8,12]

let maxCost=-1

for(let i=0;i<keyboard.length;i++){
  for(let j=0;j<drive.length;j++){  
   const totalCost= keyboard[i]+drive[j]
   if(totalCost<=budget && totalCost>maxCost){
    maxCost=totalCost
   }
  
  }
}

console.log(maxCost,"kll")






const n=7
const ar=[1,2,1,2,3,2]

const sockCounts={}
let pairCount=0


for(let i=0;i<n;i++){

  const sock=ar[i]
  if(!sockCounts[sock]){
    console.log(!sockCounts[sock],sockCounts);
    sockCounts[sock]=1
  }else{
    console.log(sockCounts,"x");
    sockCounts[sock]++
  }
}
console.log(sockCounts);

for(const sock in sockCounts){

  if(sockCounts.hasOwnProperty(sock)){
    const count=sockCounts[sock]
    pairCount +=Math.floor(count/2)
  }



}
console.log(pairCount);


const s="aba";
let aCount=0
const n1=10

for (i=0;i<s.length;i++){
if(s[i]==="a"){
  aCount++;
}
console.log(aCount,"cou")
}
 const repeat= Math.floor(n1/s.length)
 console.log(repeat,"c\rou")
 aCount*=repeat

 const reminder=n%s.length

for (i=0;i<reminder;i++){
if(s[i]==="a"){
  aCount++
}
}

console.log(aCount)



const arr=[7,2,5,3,5,3]
const brr=[7,2,5,4,6,3,5,3]


const freq={};
for (let i=0;i<arr.length;i++){
  console.log(freq[arr[i]] ,"freq[arr[i]] || 0")
  freq[arr[i]]=(freq[arr[i]] || 0)+1
}

console.log(freq,"freq")

const missing=[]

for (let i=0;i<brr.length;i++){


  if(!freq[brr[i]] || freq[brr[i]] ===0){

    missing.push(brr[i])
  }else{
    freq[brr[i]]--
  }
}

console.log(missing);


const arry=[3,7,1,2,5]

const mid= Math.floor(arry.length / 2)

const sortArr= arry.sort((a,b)=>a-b);
console.log(sortArr,"sort");



const num= sortArr.length % 2 !== 0 ? sortArr[mid] : (sortArr[mid - 1] + sortArr[mid]) / 2;
console.log(num);



function commonSubstring(s1, s2)
{

  let count=0
  let demo=[]
  s3=s1.split("")
  console.log(s3);
for(let i=0;i<s3.length;i++){
  console.log(s2);
  if(s2.includes(s3[i])){
    demo.push(s3[i])
 count++
  }
}
console.log(count,"couny");
console.log([...new Set(demo)].length,"couny");

 return count 

}

commonSubstring("hello","world")

