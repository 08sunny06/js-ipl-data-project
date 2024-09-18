
function tossMatch(arr){
let win = {}; let tossWin = {}; let res = {}
  for(let ele of arr){
   if(!(ele.toss_winner in tossWin))
    tossWin[ele.toss_winner] = 1
   else
    tossWin[ele.toss_winner]++   
   if(!(ele.winner in win))
    win[ele.winner] = 1
   else
    win[ele.winner]++
  }
  for(let ele in win){
   if(ele!=="")
   res[ele] = {wins: win[ele], tossWins: tossWin[ele]}
  }
  return res
}

export {tossMatch}
