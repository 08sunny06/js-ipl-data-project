
function manOfMatch(matches_ar) {
  try {
    let year = {}; let res = {}
    for (let matches_data of matches_ar) {
      if (!(matches_data.season in year))
        year[matches_data.season] = {}
      if (!(matches_data.player_of_match in year[matches_data.season]))
        year[matches_data.season][matches_data["player_of_match"]] = 1
      else
        year[matches_data.season][matches_data.player_of_match]++
    }
    for (let year_data in year) {
      let cou = 0
      for (let batsman_data in year[year_data]) {
        if (cou < year[year_data][batsman_data]) {
          res[year_data] = batsman_data
          cou = year[year_data][batsman_data]
        }
      }
    }
    return res
  }
  catch (error) {
    console.log(error)
  }
}

export { manOfMatch }
