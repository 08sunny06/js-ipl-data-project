
function topEconomy(arr1, arr2){
  let reqData = []
  for(let ele of arr1){
    if(ele.season == 2015){
      for(let ele1 of arr2){
       if(ele.id == ele1.match_id)
         reqData.push(ele1)
      }
    }
  }
  let runConced = 0; let data = {}; let balls = 0
  for(let ele of reqData){
    runConced = parseInt(ele.total_runs) -[parseInt(ele.penalty_runs) + parseInt(ele.legbye_runs) + parseInt(ele.bye_runs)]
    if(!(ele.bowler in data))
      data[ele.bowler] = {"runsConced": runConced, "balls": parseInt(ele.ball)}
    else{
      data[ele.bowler].runsConced += runConced
      data[ele.bowler].balls += parseInt(ele.ball)
    }
  }
  let newData = [];let ecoTop = []
  for(let ele in data){
   data[ele].balls= parseInt(data[ele].balls/6)
   let eco = (data[ele].runsConced/data[ele].balls)
   newData.push([ele,eco.toFixed(3)])
  }
  newData.sort((a,b)=>a[1]-b[1])
  for(let i=0; i<10; i++)
   ecoTop.push(newData[i][0],newData[i][1])
  return ecoTop
}

export{topEconomy}
