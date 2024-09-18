import fsc from "fs"
import * as funcData from "../../server/matches-per-year.js"

let data = fsc.readFileSync("../../data/matches.json")
let match = JSON.parse(data)

let res = funcData.extractTotalMatches(match)
console.log(res)
