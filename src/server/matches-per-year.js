

function extractTotalMatches(matches_ar) {
  try {
    let answer = {}
    for (let matches_data of matches_ar) {
      if (!(matches_data.season in answer))
        answer[matches_data.season] = 1
      else
        answer[matches_data.season]++
    }
    return answer
  }
  catch (error) {
    console.log(error)
  }
}

export { extractTotalMatches }
