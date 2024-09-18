import file from "fs"
import * as funcData from "../../server/economy-Super-Bowler.js"
let data = file.readFileSync("../../data/deliveries.json")
let deliv = JSON.parse(data)
let answer = funcData.superBowl(deliv)
console.log(answer)
