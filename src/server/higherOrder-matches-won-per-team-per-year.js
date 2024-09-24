import fsc from "fs"

let data = fsc.readFileSync("/home/shounak/js-ipl-data-project/src/data/matches.json")
let match = JSON.parse(data)

function winningteam(matches_ar){
    let matches_won_per_team_per_year = matches_ar.reduce((tot,cur) => {
        let {season,winner} = cur
        if(!(season in tot))
            tot[season] = {}
        if(!(winner in tot[season]))
           tot[season][winner] = 1
        else
           tot[season][winner]++
        
        return tot
    },{})
    return matches_won_per_team_per_year
}

console.log(winningteam(match))