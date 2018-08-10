const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay(musicians, instruments){
var array = []
for (var i = 0; i < 4; i++){
  array.push(`${musicians[i]} plays ${instruments[i]}`)
}
  return array
}

function johnLennonFacts(facts){
  var i = 0
  while (i < 5){
    var array = []
    array.push(`${facts[i]}!!!`)
    i++
  }
  return array
}