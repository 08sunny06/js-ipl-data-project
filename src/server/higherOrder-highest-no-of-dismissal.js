import fil from 'fs'

let data1 = fil.readFileSync("/home/shounak/js-ipl-data-project/src/data/deliveries.json")
let deliv = JSON.parse(data1)


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
    let key = Object.keys(dismissed)
    let value = Object.values(dismissed)
    let max = value.reduce((acc, cur, ind) => {
        acc[key[ind]] = maxObj(cur)
        
        return acc
    },{})
    let key1 = Object.keys(max)
    let value1 = Object.values(max)
    let ma = value1.reduce((tot,cur,ind) => {
        
    },)
    return max
}
 console.log(dismissalNumbers(deliv))


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