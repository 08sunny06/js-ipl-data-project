import file from "fs"
import * as funcData from "../../server/team-winningToss-winningMatch.js"

let data = file.readFileSync("../../data/matches.json")
let match = JSON.parse(data)

let res = funcData.tossMatch(match)
console.log(res)
