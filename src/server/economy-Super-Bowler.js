
function superBowl(deliveries_Ar) {
  try {
    let data_of_runs_conceded_Balls = {}; let runsConceded = 0;
    for (let deliveries_data of deliveries_Ar) {
      if (deliveries_data.is_super_over != 0) {
        runsConceded = parseInt(deliveries_data.total_runs) - (parseInt(deliveries_data.bye_runs) + parseInt(deliveries_data.legbye_runs) + parseInt(deliveries_data.penalty_runs))
        if (!(deliveries_data.bowler in data_of_runs_conceded_Balls))
          data_of_runs_conceded_Balls[deliveries_data.bowler] = { "runsConceded": runsConceded, "superBalls": parseInt(deliveries_data.ball) }
        else {
          data_of_runs_conceded_Balls[deliveries_data.bowler]["runsConceded"] += runsConceded
          data_of_runs_conceded_Balls[deliveries_data.bowler]["superBalls"] += parseInt(deliveries_data.ball)
        }
      }
    }
    let economyRate = 10000; let superEco = {}; let answer = ""
    for (let ele in data_of_runs_conceded_Balls) {
      let over = data_of_runs_conceded_Balls[ele].superBalls / 6
      superEco[ele] = data_of_runs_conceded_Balls[ele].runsConceded / parseInt(over)
      if (economyRate > superEco[ele]) {
        economyRate = superEco[ele]
        answer = ele
      }
    }
    return answer
  }
  catch (error) {
    console.log(error)
  }
}

export { superBowl }
