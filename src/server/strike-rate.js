
function strikeRate(deliveries_ar, matches_ar){
let year = {}; let answer = {}
for(let matches_data of matches_ar){  
  if(!(matches_data.season in year))
    year[matches_data.season] = []
  if(year[matches_data.season].indexOf(matches_data.id)==-1)
    year[matches_data.season].push(matches_data.id)
 }

for(let deliveries_data of deliveries_ar){
  for(let year_data in year){
   if(!(year_data in answer))
    answer[year_data] = {}
   if(year[year_data].indexOf(deliveries_data.match_id)!==-1){
     if(!(deliveries_data.batsman in answer[year_data]))
      answer[year_data][deliveries_data.batsman] = {runs: 0, balls: 0, strikeRat: 0}
      answer[year_data][deliveries_data.batsman].runs += parseInt(deliveries_data.batsman_runs)
     if(deliveries_data.wide_runs==0){
       if(deliveries_data.noball_runs==0)
      answer[year_data][deliveries_data.batsman].balls++
      }
    }
  }
}
for(let year_data in answer){
  for(let batsman_data in answer[year_data]){
    if(answer[year_data][batsman_data].balls>0){
      let strikeRat = (answer[year_data][batsman_data].runs/answer[year_data][batsman_data].balls*100).toFixed(3)
     answer[year_data][batsman_data] = strikeRat
    }
   }
}
return answer
}

export {strikeRate}
