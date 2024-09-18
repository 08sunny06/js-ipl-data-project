
function manOfMatch(arr){
 let man = {};let res = {}
 for(let ele of arr){
  if(!(ele.season in man))
   man[ele.season] = {}
  if(!(ele.player_of_match in man[ele.season]))
   man[ele.season][ele["player_of_match"]] = 1
  else
   man[ele.season][ele.player_of_match]++
 }
 for(let ele in man){
  let cou = 0
  for(let ele1 in man[ele]){
   if(cou<man[ele][ele1]){
    res[ele] = ele1
    cou = man[ele][ele1]
   }
  }
 }
 return res
}

export {manOfMatch}
