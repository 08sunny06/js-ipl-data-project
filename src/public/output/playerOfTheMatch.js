import files from "fs"
import * as funcData from "../../server/player-of-the-match.js"

let data = files.readFileSync("../../data/matches.json")
let match = JSON.parse(data)

let res = funcData.manOfMatch(match)
console.log(res)
