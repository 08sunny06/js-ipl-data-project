import file from "fs"
import * as funcData from "/home/shounak/js-ipl-data-project/src/server/team-winningToss-winningMatch.js"

let data = file.readFileSync("/home/shounak/js-ipl-data-project/src/data/matches.json")
let match = JSON.parse(data)

let res = funcData.tossMatch(match)
console.log(res)
