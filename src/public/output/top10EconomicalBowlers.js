import file from "fs"
import * as funcData from "../../server/top10-Economical-Bowlers.js"

let data = file.readFileSync("../../data/matches.json")
let data1 = file.readFileSync("../../data/deliveries.json")

let match = JSON.parse(data)
let deliv = JSON.parse(data1)

let result = funcData.topEconomy(match,deliv)
console.log(result)
