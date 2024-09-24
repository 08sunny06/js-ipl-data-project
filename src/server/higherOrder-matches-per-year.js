import file from "fs"

let data = file.readFileSync("/home/shounak/js-ipl-data-project/src/data/matches.json")
let match = JSON.parse(data)

function segrMatch(arr){
    let ar = arr.reduce((tot,cur) => {
        let {season} = cur
        if(!(season in tot))
            tot[season] = 0
        tot[season]++
        return tot
    },{})
    return ar
}

 console.log(segrMatch(match))