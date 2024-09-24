import fil from "fs"
let data = fil.readFileSync("/home/shounak/js-ipl-data-project/src/data/matches.json")
let match = JSON.parse(data)

function playerMatch(arr){
    let res = arr.reduce((tot,cur) => {
        let {season, player_of_match: player} = cur;
        if(!(season in tot))
            tot[season] = {}
        if(!(player in tot[season]))
            tot[season][player] = 1
        else
            tot[season][player]++
        return tot
    }, {})
    let max = 0; let keys = Object.keys(res); 
    let values = Object.values(res).reduce((tot,cur,ind)=>{
        let key = Object.keys(cur);
        let value = Object.values(cur)
        let max = Math.max(...value)
        tot[keys[ind]] = (key[value.indexOf(max)])
        return tot
    },{})
    return values  
}

console.log(playerMatch(match))