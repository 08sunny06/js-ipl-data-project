import fil from 'fs'

let data1 = fil.readFileSync("/home/shounak/js-ipl-data-project/src/data/deliveries.json")
let deliveries_Ar = JSON.parse(data1)


function dismissalNumbers(arr){
    let dismissed = arr.reduce((acc, cur) => {
        let {dismissal_kind: disKn, player_dismissed: disPl, bowler} = cur
        if(!(bowler in acc))
            acc[bowler] = {}
        if(disPl !== ""){
            if(disKn !== "" || disKn !== "run out" || disKn !== "obstructing the field" || disKn !== "retired hurt"){
                if(!(disPl in acc[bowler]))
                    acc[bowler][disPl] = 1
                else
                acc[bowler][disPl]++
            }
        }
        return acc
    },{})
    // console.log(Object.entries(dismissed))

     let res = Object.entries(dismissed).map(([bowler,batsman])=>{
        let ans = Object.entries(batsman).reduce((tot,[batsman,value])=>{
            if(tot[1]<value){
                tot[1] = value
                tot[0] = batsman
            }
            return tot
        },["", 0])
        return [bowler,Object.fromEntries([ans])]
     },[])
     let res2 = res.reduce((tot,[bowler,values])=>{
        let batsmn = Object.keys(values)
        if(tot[0][1]["count"]<values[batsmn]){
            tot[0][0] = bowler
            tot[0][1]["name"] = (batsmn).toString()
            tot[0][1]["count"] = values[batsmn]
        }
        return tot
     },[["",{"name":"","count":0}]])
     return (Object.fromEntries(res2))

}
 console.log(dismissalNumbers(deliveries_Ar))


// let obj = {a:2, b:4, c:4}

function maxObj(obj){
    let ob = {}
    let key = Object.keys(obj)
    let value = Object.values(obj)
    let max = value.reduce((tot,cur) => {if(tot<cur)tot=cur; return tot},0)
    ob[key[value.indexOf(max)]] = max 
    return ob
}

// console.log(maxObj(obj))