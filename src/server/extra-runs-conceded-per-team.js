

function extrRun(arr1, arr2){
   let idMatch = []; let reqMatch = []; let extra = {}
   for(let ele of arr1){
    if(ele.season == 2016){
        idMatch.push(ele)
    }
   }
   for(let play of idMatch){
    for(let play1 of arr2){
     if(play.id === play1.match_id)
      reqMatch.push(play1)
    }
   }
   for(let ele of reqMatch){
    let exrun = 0 
    if(!(ele.bowling_team in extra))
       extra[ele.bowling_team] = 0
    else
       extra[ele.bowling_team] += parseInt(ele.extra_runs)
   }
  return extra
}

export {extrRun}
