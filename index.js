// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']
const drivers1 = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh'
  },
  {
    name: 'Sammy',
    hometown: 'New York'
  },
  {
    name: 'Sally',
    hometown: 'Cleveland'
  },
  {
    name: 'Annette',
    hometown: 'Los Angeles'
  },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay'
  }
];

function findMatching(drivers , name){
  let matchDriver = drivers.filter(elem => elem.toLowerCase() === name.toLowerCase());
  return matchDriver
}
console.log(findMatching(drivers, 'Bobby'))
console.log(findMatching(drivers, 'Sammy'))
console.log(findMatching(drivers, 'Susan'))
function fuzzyMatch(drivers, letter){
  let r = drivers.filter(elem => elem.slice(0, 2) ===letter)
  return r
 }
console.log(fuzzyMatch(drivers, 'Sa'))
console.log(fuzzyMatch(drivers, 'y'))

function matchName(drivers1, name){
  let n = drivers1.filter(elem => elem.name === name)
  return n
}
console.log(matchName(drivers1, 'Bobby'))
