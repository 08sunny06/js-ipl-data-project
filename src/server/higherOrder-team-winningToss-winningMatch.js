import fil from "fs"
let data = fil.readFileSync("/home/shounak/js-ipl-data-project/src/data/matches.json")
let match = JSON.parse(data)

function tossMatchWin(matches_ar){
    let res = matches_ar.reduce((tot,matches_ar_data) => {
        let {toss_winner , winner} = matches_ar_data
        if(!(toss_winner in tot))
            tot[toss_winner] = 0
        if(toss_winner==winner){
            tot[toss_winner]++
        }return tot
    },{})
    return res
}

console.log(tossMatchWin(match))