import fsc from "fs"
import * as funcData from "/home/shounak/js-ipl-data-project/src/server/matches-per-year.js"

let data = fsc.readFileSync("/home/shounak/js-ipl-data-project/src/data/matches.json")
let match = JSON.parse(data)

let res = funcData.extractTotalMatches(match)
console.log(res)
