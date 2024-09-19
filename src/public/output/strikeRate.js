import files from "fs"
import * as funcData from "/home/shounak/js-ipl-data-project/src/server/strike-rate.js"

let data = files.readFileSync("/home/shounak/js-ipl-data-project/src/data/matches.json")
let data1 = files.readFileSync("/home/shounak/js-ipl-data-project/src/data/deliveries.json")

let deliv = JSON.parse(data1)
let match = JSON.parse(data)

let res = funcData.strikeRate(deliv,match)
console.log(res)
