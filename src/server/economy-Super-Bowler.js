
function superBowl(arr){
  let data = {}; let runsConceded = 0;
  for(let ele of arr){
    if(ele.is_super_over!=0){
    runsConceded = parseInt(ele.total_runs) - (parseInt(ele.bye_runs) + parseInt(ele.legbye_runs) + parseInt(ele.penalty_runs))
    if(!(ele.bowler in data))
     data[ele.bowler] = {"runsConceded":runsConceded, "superBalls": parseInt(ele.ball)}
    else{
     data[ele.bowler]["runsConceded"] += runsConceded
     data[ele.bowler]["superBalls"] += parseInt(ele.ball)
    }
   }
  }
  let economyRate = 10000; let superEco = {}; let key = ""
  for(let ele in data){
   let over = data[ele].superBalls/6
   superEco[ele] = data[ele].runsConceded/parseInt(over)
   if(economyRate>superEco[ele]){
     economyRate = superEco[ele]
     key = ele
   }
  }
  return key
 }

export {superBowl}
