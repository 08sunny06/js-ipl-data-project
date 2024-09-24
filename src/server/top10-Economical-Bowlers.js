
function topEconomy(matches_ar, deliveries_ar){
  let deliveries_delivered_in_2015 = []
  for(let matches_data of matches_ar){
    if(matches_data.season == 2015){
      for(let deliveries_data of deliveries_ar){
       if(matches_data.id == deliveries_data.match_id)
         deliveries_delivered_in_2015.push(deliveries_data)
      }
    }
  }
  let runConced = 0; let required_deliveries_data = {}; let balls = 0
  for(let deliveries_data of deliveries_delivered_in_2015){
    runConced = parseInt(deliveries_data.total_runs) -[parseInt(deliveries_data.penalty_runs) + parseInt(deliveries_data.legbye_runs) + parseInt(deliveries_data.bye_runs)]
    if(!(deliveries_data.bowler in required_deliveries_data))
      required_deliveries_data[deliveries_data.bowler] = {"runsConced": runConced, "balls": parseInt(deliveries_data.ball)}
    else{
      required_deliveries_data[deliveries_data.bowler].runsConced += runConced
      required_deliveries_data[deliveries_data.bowler].balls += parseInt(deliveries_data.ball)
    }
  }
  let newData = [];let ecoTop = []
  for(let required_deliveries in required_deliveries_data){
   required_deliveries_data[required_deliveries].balls= parseInt(required_deliveries_data[required_deliveries].balls/6)
   let eco = (required_deliveries_data[required_deliveries].runsConced/required_deliveries_data[required_deliveries].balls)
   newData.push([required_deliveries,eco.toFixed(3)])
  }
  newData.sort((a,b)=>a[1]-b[1])
  for(let i=0; i<10; i++)
   ecoTop.push(newData[i][0],newData[i][1])
  return ecoTop
}

export{topEconomy}
