import file from "fs"
let data1 = file.readFileSync("/home/shounak/js-ipl-data-project/src/data/matches.json")
let data2 = file.readFileSync("/home/shounak/js-ipl-data-project/src/data/deliveries.json")

let match = JSON.parse(data1)
let deliv = JSON.parse(data2)

function economicalBowl(arr1, arr2){
    let reqData = arr1.reduce(function(tot,cur){
        if(cur.season==2015)
            tot.push(cur.id);
        return tot
        },[])
    let filterData = arr2.reduce((tur,cur) => {
        if(reqData.indexOf(cur.match_id)>-1)
            tur.push(cur)
        return tur
    },[])
    
    let ecoBowl = filterData.reduce((acc,cur) => {
        let {bowler, ball, bye_runs: bye, legbye_runs: lgbye, penalty_runs: penal, total_runs: tot} = cur;
        if(!(bowler in acc))
            acc[bowler] = {economyRate: 0, ball: 0}
        acc[bowler]["economyRate"] += parseInt(tot) -(parseInt(bye) + parseInt(lgbye) + parseInt(penal))        
        acc[bowler]["ball"]++
        return acc
    },{})
    let bowler = Object.keys(ecoBowl);
    let data = Object.values(ecoBowl).reduce((tot, cur, ind) => {
        cur.ball /= 6
        cur.economyRate /= cur.ball
        tot.push([bowler[ind],cur.economyRate.toFixed(2)])
        return tot 
    },[])
    data = data.sort((a,b) => a[1]-b[1]).filter((item,ind) => {if(ind<10)return item})
    return data
}

console.log(economicalBowl(match, deliv))
