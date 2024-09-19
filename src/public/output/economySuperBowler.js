import file from "fs"
import * as funcData from "/home/shounak/js-ipl-data-project/src/server/economy-Super-Bowler.js"
let data = file.readFileSync("/home/shounak/js-ipl-data-project/src/data/deliveries.json")
let deliv = JSON.parse(data)
let answer = funcData.superBowl(deliv)
console.log(answer)
