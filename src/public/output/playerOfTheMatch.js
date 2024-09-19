import files from "fs"
import * as funcData from "/home/shounak/js-ipl-data-project/src/server/player-of-the-match.js"

let data = files.readFileSync("/home/shounak/js-ipl-data-project/src/data/matches.json")
let match = JSON.parse(data)

let res = funcData.manOfMatch(match)
console.log(res)