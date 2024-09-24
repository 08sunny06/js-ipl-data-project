import file from "fs"

let data = file.readFileSync("/home/shounak/js-ipl-data-project/src/data/matches.json")
let data1 = file.readFileSync("/home/shounak/js-ipl-data-project/src/data/deliveries.json")

let match = JSON.parse(data)
let deliv = JSON.parse(data1)

function runsConceded(arr1, arr2){
    let ar = arr1.reduce((tot,cur) => {if(cur["season"]==2016)tot.push(cur['id']); return tot}, [])

    let ar1 = arr2.reduce((tot,cur) => {
        let {match_id: id} = cur        
        if(ar.indexOf(id)>-1){            
            tot.push(cur)}
        return tot
    },[])
    let ans = ar1.reduce((tot,cur) => {
        let {extra_runs: extra, bowling_team: bowTe} = cur
        if(!(bowTe in tot))      
            tot[bowTe] = 0
        tot[bowTe] += parseInt(extra)
        return tot
    }, {})
    return ans
}

console.log(runsConceded(match,deliv))