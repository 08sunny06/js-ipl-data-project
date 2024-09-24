
function winCount(matches_ar){
let tot = {}
for(let matches_data of matches_ar){
  if(!(matches_data.season in tot))
    tot[matches_data.season] = {}
  if(matches_data.winner!= ""){
    if(!(matches_data.winner in tot[matches_data.season]))
      tot[matches_data.season][matches_data.winner] = 1
    else
      tot[matches_data.season][matches_data.winner]++
  }    
}
return tot
}

export {winCount}
