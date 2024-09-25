
function dismissalHighNumber(deliveries_ar){
let bowler_req_data = {};
for(let data_deliveries of deliveries_ar){ 
 if(!(data_deliveries.bowler in bowler_req_data))
   bowler_req_data[data_deliveries.bowler] = {} 
 if(data_deliveries.player_dismissed!==""){
  if(data_deliveries.dismissal_kind!=="" || data_deliveries.dismissal_kind!=="run out" || data_deliveries.dismissal_kind!=="retired hurt" || data_deliveries.dismissal_kind!=="obstructing the field"){
   if(!(data_deliveries.player_dismissed in bowler_req_data[data_deliveries.bowler]))
    bowler_req_data[data_deliveries.bowler][data_deliveries.player_dismissed] = 1
   else
    bowler_req_data[data_deliveries.bowler][data_deliveries.player_dismissed]++
  }
 }
}
let updated_bowler_data = {}; let result = []; let check1 = 0
for(let bowler in bowler_req_data){
 if(!(bowler in updated_bowler_data))
  updated_bowler_data[bowler] = {}
 let check = 0;
 for(let batsman in bowler_req_data[bowler]){
  if(check<bowler_req_data[bowler][batsman]){
   let obj = {}
   check = bowler_req_data[bowler][batsman]
   obj[batsman] = check
   updated_bowler_data[bowler] = obj
  }
 }
 for(let batsman in updated_bowler_data[bowler]){
  if(check1<=updated_bowler_data[bowler][batsman]){
   let obj = {};
   check1 = updated_bowler_data[bowler][batsman]
   obj[bowler] = {}
   obj[bowler][batsman] = check
   result = obj
  }
 }
}
return result
}


export {dismissalHighNumber}
