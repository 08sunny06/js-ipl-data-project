import man from "fs"
import * as funcData from "../../server/highest-no-of-dismissal.js"

let data = man.readFileSync("../../data/deliveries.json")

let deliv = JSON.parse(data)

let res = funcData.dismissalHighNumber(deliv)
console.log(res)
