import file from "fs"

let data = file.readFileSync("/home/shounak/js-ipl-data-project/src/data/matches.json")
let match = JSON.parse(data)

function segrMatch(matches_ar){
    let matches_per_yer_ar = matches_ar.reduce((tot,matches_element) => {
        let {season} = matches_element
        if(!(season in tot))
            tot[season] = 0
        tot[season]++
        return tot
    },{})
    return matches_per_yer_ar
}

 console.log(segrMatch(match))