import fsc from "fs"

let data = fsc.readFileSync("/home/shounak/js-ipl-data-project/src/data/matches.json")
let match = JSON.parse(data)

function winningteam(matches_ar) {
    try {
        let matches_won_per_team_per_year = matches_ar.reduce((tot, cur_match_data) => {
            let { season, winner } = cur_match_data
            if (!(season in tot))
                tot[season] = {}
            if (!(winner in tot[season]))
                tot[season][winner] = 1
            else
                tot[season][winner]++

            return tot
        }, {})
        return matches_won_per_team_per_year
    }
    catch (error) {
        console.log(error)
    }
}

console.log(winningteam(match))