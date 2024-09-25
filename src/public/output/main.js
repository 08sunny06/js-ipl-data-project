import fs from "fs"
import * as matchesYear from "/home/shounak/js-ipl-data-project/src/server/matches-per-year.js"
import * as matchesWonYear from "/home/shounak/js-ipl-data-project/src/server/matches-won-per-team-per-year.js"
import * as extraRunsConceded from "/home/shounak/js-ipl-data-project/src/server/extra-runs-conceded-per-team.js"
import * as highestDismissal from "/home/shounak/js-ipl-data-project/src/server/highest-no-of-dismissal.js"
import * as playerMatch from "/home/shounak/js-ipl-data-project/src/server/player-of-the-match.js"
import * as superEco from "/home/shounak/js-ipl-data-project/src/server/economy-Super-Bowler.js"
import * as strike from "/home/shounak/js-ipl-data-project/src/server/strike-rate.js"
import * as tossWinMatch from "/home/shounak/js-ipl-data-project/src/server/team-winningToss-winningMatch.js"
import * as topEco from "/home/shounak/js-ipl-data-project/src/server/higherOrder-top10-Economical-Bowlers.js"

let matchData = fs.readFileSync("/home/shounak/js-ipl-data-project/src/data/matches.json")
let delivData = fs.readFileSync("/home/shounak/js-ipl-data-project/src/data/deliveries.json")

let matches = JSON.parse(matchData)
let deliveries = JSON.parse(delivData)

let answer = matchesYear.extractTotalMatches(matches)
let answer1 = matchesWonYear.winCount(matches)
let answer2 = extraRunsConceded.extrRun(matches,deliveries)
let answer3 = highestDismissal.dismissalHighNumber(deliveries)
let answer4 = playerMatch.manOfMatch(matches)
let answer5 = superEco.superBowl(deliveries) 
let answer6 = strike.strikeRate(deliveries,matches)
let answer7 = tossWinMatch.tossMatch(matches)
let answer8 = topEco.economicalBowl(matches,deliveries)


fs.writeFileSync("/home/shounak/js-ipl-data-project/src/public/output/matchesPerYear.json",  JSON.stringify(answer,null,2))
fs.writeFileSync("/home/shounak/js-ipl-data-project/src/public/output/matchesWonPerTeamPerYear.json",  JSON.stringify(answer1,null,2))
fs.writeFileSync("/home/shounak/js-ipl-data-project/src/public/output/extraRunsConcededPerTeam.json", JSON.stringify(answer2,null,2))
fs.writeFileSync("/home/shounak/js-ipl-data-project/src/public/output/highestNoOfDismissal.json", JSON.stringify(answer3,null,2))
fs.writeFileSync("/home/shounak/js-ipl-data-project/src/public/output/playerOfTheMatch.json", JSON.stringify(answer4,null,2))
fs.writeFileSync("/home/shounak/js-ipl-data-project/src/public/output/economySuperBowler.json", JSON.stringify(answer5,null,2))
fs.writeFileSync("/home/shounak/js-ipl-data-project/src/public/output/strikeRate.json", JSON.stringify(answer6,null,2))
fs.writeFileSync("/home/shounak/js-ipl-data-project/src/public/output/teamWinningTossWinningMatch.json", JSON.stringify(answer7,null,2))
fs.writeFileSync("/home/shounak/js-ipl-data-project/src/public/output/top10EconomicalBowlers.json", JSON.stringify(answer8,null,2))
