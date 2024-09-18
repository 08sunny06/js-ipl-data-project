import fsv from "fs"
import * as funcData from "../../server/extra-runs-conceded-per-team.js"

let data = fsv.readFileSync("../../data/matches.json")
let data1 = fsv.readFileSync("../../data/deliveries.json")

let match = JSON.parse(data)
let deliv = JSON.parse(data1)

let result = funcData.extrRun(match,deliv)

console.log(result)
