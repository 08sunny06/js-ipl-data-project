

function extrRun(matches_ar, deliveries_ar){
   let id_matches_ar = []; let req_data_of_deliveries_ar = []; let extra_runs = {}
   for(let data_of_matches_ar of matches_ar){
    if(data_of_matches_ar.season == 2016){
        id_matches_ar.push(data_of_matches_ar)
    }
   }   
   for(let ids_of_matches_ar of id_matches_ar){
    for(let data_deliveries_ar of deliveries_ar){
     if(ids_of_matches_ar.id === data_deliveries_ar.match_id)
      req_data_of_deliveries_ar.push(data_deliveries_ar)
    }
   }   
   for(let data_of_deliveries_ar of req_data_of_deliveries_ar){
    if(!(data_of_deliveries_ar.bowling_team in extra_runs))
       extra_runs[data_of_deliveries_ar.bowling_team] = 0
    else
       extra_runs[data_of_deliveries_ar.bowling_team] += parseInt(data_of_deliveries_ar.extra_runs)
   }
   return extra_runs
}

export {extrRun}
