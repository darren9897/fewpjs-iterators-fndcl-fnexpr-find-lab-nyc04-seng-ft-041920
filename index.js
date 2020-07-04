const testVar = {}

function testFunc() {
  return "hi"
}

// function superbowlWin(arr){
//   arr.find(team=> if (team.result === "W") => team.year)
// }

function superbowlWin(arr) {
  let yearWon
  arr.find(win => {
    if (win.result === 'W') {
      yearWon = win.year
    }
  })
  return yearWon
}