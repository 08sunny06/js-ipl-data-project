import fsc from "fs"
import * as funcData from "/home/shounak/js-ipl-data-project/src/server/matches-won-per-team-per-year.js"

let data = fsc.readFileSync("/home/shounak/js-ipl-data-project/src/data/matches.json")
let match = JSON.parse(data)

let result = funcData.winCount(match)
console.log(result)
