
function dismissalHighNumber(arr){
let bowl = {};
for(let ele of arr){ 
 if(!(ele.bowler in bowl))
   bowl[ele.bowler] = {} 
 if(ele.player_dismissed!==""){
  if(ele.dismissal_kind!=="" || ele.dismissal_kind!=="run out" || ele.dismissal_kind!=="retired hurt" || ele.dismissal_kind!=="obstructing the field"){
   if(!(ele.player_dismissed in bowl[ele.bowler]))
    bowl[ele.bowler][ele.player_dismissed] = 1
   else
    bowl[ele.bowler][ele.player_dismissed]++
  }
 }
}
let temp = {}; let res = []; let check1 = 0
for(let ele in bowl){
 if(!(ele in temp))
  temp[ele] = {}
 let check = 0;
 for(let ele1 in bowl[ele]){
  if(check<bowl[ele][ele1]){
   let obj = {}
   check = bowl[ele][ele1]
   obj[ele1] = check
   temp[ele] = obj
  }
 }
 for(let ele1 in temp[ele]){
  if(check1<=temp[ele][ele1]){
   let obj = {};
   check1 = temp[ele][ele1]
   obj[ele] = {}
   obj[ele][ele1] = check
   res = obj
  }
 }
}
return res
}


export {dismissalHighNumber}
