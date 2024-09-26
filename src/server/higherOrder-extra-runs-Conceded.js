import file from "fs"

let data = file.readFileSync("/home/shounak/js-ipl-data-project/src/data/matches.json")
let data1 = file.readFileSync("/home/shounak/js-ipl-data-project/src/data/deliveries.json")

let matches = JSON.parse(data)
let deliveries = JSON.parse(data1)

function runsConceded(matches_ar, deliveries_ar) {
    try {
        let match_id_2016 = matches_ar.reduce((tot, match_data) => { if (match_data["season"] == 2016) tot.push(match_data['id']); return tot }, [])

        let delivery_data_2016 = deliveries_ar.reduce((tot, deliveries_data) => {
            let { match_id } = deliveries_data
            if (match_id_2016.indexOf(match_id) > -1) {
                tot.push(deliveries_data)
            }
            return tot
        }, [])
        let answer = delivery_data_2016.reduce((tot, current_2016_delivery_data) => {
            let { extra_runs, bowling_team } = current_2016_delivery_data
            if (!(bowling_team in tot))
                tot[bowling_team] = 0
            tot[bowling_team] += parseInt(extra_runs)
            return tot
        }, {})
        return answer
    }
    catch (error) {
        console.log(error)
    }
}

console.log(runsConceded(matches, deliveries))