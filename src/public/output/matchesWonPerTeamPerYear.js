import fsc from "fs"
import * as funcData from "../../server/matches-won-per-team-per-year.js"

let data = fsc.readFileSync("../../data/matches.json")
let match = JSON.parse(data)

let result = funcData.winCount(match)
console.log(result)
