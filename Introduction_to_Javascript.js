//print the prime number between 0 to given limit
let num=1010
for(let i=0;i<num;i++){
let count=0
  for(let j=2;j<=num;j++){
    if(i%j===0 && i!==j){
      count++
    }
}if(count==0){
  console.log(i,"bhai ye prime hai")
  }
}
