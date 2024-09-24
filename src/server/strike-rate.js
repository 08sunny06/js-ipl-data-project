
function strikeRate(arr1, arr2){
let sea = {}; let res = {}
for(let ele of arr2){  
  if(!(ele.season in sea))
    sea[ele.season] = []
  if(sea[ele.season].indexOf(ele.id)==-1)
    sea[ele.season].push(ele.id)
 }

for(let ele1 of arr1){
  for(let ele in sea){
   if(!(ele in res))
    res[ele] = {}
   if(sea[ele].indexOf(ele1.match_id)!==-1){
     if(!(ele1.batsman in res[ele]))
      res[ele][ele1.batsman] = {runs: 0, balls: 0, strikeRat: 0}
      res[ele][ele1.batsman].runs += parseInt(ele1.batsman_runs)
     if(ele1.wide_runs==0){
       if(ele1.noball_runs==0)
      res[ele][ele1.batsman].balls++
      }
    }
  }
}
for(let ele in res){
  for(let ele1 in res[ele]){
    if(res[ele][ele1].balls>0){
      let strikeRat = (res[ele][ele1].runs/res[ele][ele1].balls*100).toFixed(3)
     res[ele][ele1] = strikeRat
    }
   }
}
return res
}

export {strikeRate}
