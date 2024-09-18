
function winCount(ar){
let tot = {}
for(let ele of ar){
  if(!(ele.season in tot))
    tot[ele.season] = {}
  if(ele.winner!= ""){
    if(!(ele.winner in tot[ele.season]))
      tot[ele.season][ele.winner] = 1
    else
      tot[ele.season][ele.winner]++
  }    
}
return tot
}

export {winCount}
