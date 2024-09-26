
function economicalBowl(matches_ar, deliveries_ar) {
    try {
        let match_2015_id = matches_ar.reduce(function (tot, cur_match_id) {
            if (cur_match_id.season == 2015)
                tot.push(cur_match_id.id);
            return tot
        }, [])
        let delivery_2015_data = deliveries_ar.reduce((tur, cur_delivery_data) => {
            if (match_2015_id.indexOf(cur_delivery_data.match_id) > -1)
                tur.push(cur_delivery_data)
            return tur
        }, [])

        let eco_bowler_data = delivery_2015_data.reduce((acc, cur) => {
            let { bowler, ball, bye_runs, legbye_runs, penalty_runs, total_runs } = cur;
            if (!(bowler in acc))
                acc[bowler] = { economyRate: 0, ball: 0 }
            acc[bowler]["economyRate"] += parseInt(total_runs) - (parseInt(bye_runs) + parseInt(legbye_runs) + parseInt(penalty_runs))
            acc[bowler]["ball"]++
            return acc
        }, {})
        let bowler = Object.keys(eco_bowler_data);
        let bowler_data = Object.values(eco_bowler_data).reduce((tot, cur_bowler_data, ind) => {
            cur_bowler_data.ball /= 6
            cur_bowler_data.economyRate /= cur_bowler_data.ball
            tot.push([bowler[ind], cur_bowler_data.economyRate.toFixed(2)])
            return tot
        }, [])
        bowler_data = bowler_data.sort((a, b) => a[1] - b[1]).filter((item, ind) => { if (ind < 10) return item })
        return bowler_data
    }
    catch (error) {
        console.log(error)
    }
}

export { economicalBowl }
