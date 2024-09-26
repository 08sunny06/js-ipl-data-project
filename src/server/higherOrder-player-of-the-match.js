import fil from "fs"
let data = fil.readFileSync("/home/shounak/js-ipl-data-project/src/data/matches.json")
let match = JSON.parse(data)

function playerMatch(matches_ar) {
    try {
        let no_of_times_man_of_the_match = matches_ar.reduce((tot, matches_element) => {
            let { season, player_of_match } = matches_element;
            if (!(season in tot))
                tot[season] = {}
            if (!(player_of_match in tot[season]))
                tot[season][player_of_match] = 1
            else
                tot[season][player_of_match]++
            return tot
        }, {})

        let highest_player_of_match_count = 0; let keys = Object.keys(no_of_times_man_of_the_match);
        let values = Object.values(no_of_times_man_of_the_match).reduce((tot, man_of_match_data, ind) => {
            let key = Object.keys(man_of_match_data);
            let value = Object.values(man_of_match_data)
            let highest_player_of_match_count = Math.max(...value)
            tot[keys[ind]] = (key[value.indexOf(highest_player_of_match_count)])
            return tot
        }, {})
        return values
    }
    catch (error) {
        console.log(error)
    }
}

console.log(playerMatch(match))