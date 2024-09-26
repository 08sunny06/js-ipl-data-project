
function tossMatch(matches_ar){
try{
let answer = {}
  for(let matches_element of matches_ar){
    if(!(matches_element.toss_winner in answer))
      answer[matches_element.toss_winner] = 0
    if((matches_element.toss_winner==matches_element.winner))
      answer[matches_element.toss_winner]++
  }
   return answer
  }
  catch(error){
    console.log(error)
  }
}

export {tossMatch}
