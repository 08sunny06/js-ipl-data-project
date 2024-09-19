import fsv from "fs"
import * as funcData from "/home/shounak/js-ipl-data-project/src/server/extra-runs-conceded-per-team.js"

let data = fsv.readFileSync("/home/shounak/js-ipl-data-project/src/data/matches.json")
let data1 = fsv.readFileSync("/home/shounak/js-ipl-data-project/src/data/deliveries.json")

let match = JSON.parse(data)
let deliv = JSON.parse(data1)

let result = funcData.extrRun(match,deliv)

console.log(result)
