import fil from "fs"
let data = fil.readFileSync("/home/shounak/js-ipl-data-project/src/data/matches.json")
let match = JSON.parse(data)

function tossMatchWin(arr){
    let res = arr.reduce((tot,cur) => {
        let {toss_winner :tossWin, winner: win} = cur
        if(!(tossWin in tot))
            tot[tossWin] = 0
        if(tossWin==win){
            tot[tossWin]++
        }return tot
    },{})
    return res
}

console.log(tossMatchWin(match))