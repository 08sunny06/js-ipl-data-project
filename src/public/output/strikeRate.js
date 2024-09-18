import files from "fs"
import * as funcData from "../../server/strike-rate.js"

let data = files.readFileSync("../../data/matches.json")
let data1 = files.readFileSync("../../data/deliveries.json")

let deliv = JSON.parse(data1)
let match = JSON.parse(data)

let res = funcData.strikeRate(deliv,match)
console.log(res)
