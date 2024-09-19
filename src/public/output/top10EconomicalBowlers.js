import file from "fs"
import * as funcData from "/home/shounak/js-ipl-data-project/src/server/top10-Economical-Bowlers.js"

let data = file.readFileSync("/home/shounak/js-ipl-data-project/src/data/matches.json")
let data1 = file.readFileSync("/home/shounak/js-ipl-data-project/src/data/deliveries.json")

let match = JSON.parse(data)
let deliv = JSON.parse(data1)

let result = funcData.topEconomy(match,deliv)
console.log(result)
