

function extractTotalMatches(matches_ar){
let answer = {}
for(let matches_data of matches_ar){
   if(!(matches_data.season in answer))
     answer[matches_data.season] = 1
   else
     answer[matches_data.season]++
}
return answer
}

export {extractTotalMatches}
