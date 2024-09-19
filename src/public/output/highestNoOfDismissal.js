import man from "fs"
import * as funcData from "/home/shounak/js-ipl-data-project/src/server/highest-no-of-dismissal.js"

let data = man.readFileSync("/home/shounak/js-ipl-data-project/src/data/deliveries.json")

let deliv = JSON.parse(data)

let res = funcData.dismissalHighNumber(deliv)
console.log(res)
