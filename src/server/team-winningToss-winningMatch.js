
function tossMatch(arr){
let win = {}; let tossWin = {}; let res = {}
  for(let ele of arr){
    if(!(ele.toss_winner in res))
      res[ele.toss_winner] = 0
    if((ele.toss_winner==ele.winner))
      res[ele.toss_winner]++
  }
   return res
}

export {tossMatch}
