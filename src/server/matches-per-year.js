

function extractTotalMatches(arr){
let tot = {}
for(let ele of arr){
   if(!(ele.season in tot))
     tot[ele.season] = 1
   else
     tot[ele.season]++
}
return tot
}

export {extractTotalMatches}
