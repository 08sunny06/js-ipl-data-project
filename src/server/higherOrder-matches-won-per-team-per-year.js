import fsc from "fs"

let data = fsc.readFileSync("/home/shounak/js-ipl-data-project/src/data/matches.json")
let match = JSON.parse(data)

function winningteam(arr){
    let ar = arr.reduce((tot,cur) => {
        let {season,winner} = cur
        if(!(season in tot))
            tot[season] = {}
        if(!(winner in tot[season]))
           tot[season][winner] = 1
        else
           tot[season][winner]++
        
        return tot
    },{})
    return ar
}

console.log(winningteam(match))