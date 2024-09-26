const trip = 1500
const fuelcost=3
const fuelbudget=175
const fuelefficiency55=30
const fuelefficiency60=28
const fuelefficiency75=23
const speed55=55
const speed60=60
const speed75=75

//How many gallons of fuel will you need for the entire trip?
const totalfuelfor30miles= trip/ fuelefficiency55
console.log(`total gallons of fuel for 30miles:${totalfuelfor30miles}`)
const totalfuelfor28miles= trip/ fuelefficiency60
console.log(`total gallons of  fuel for28miles:${totalfuelfor28miles}`)
const totalfuelfor23miles= trip/ fuelefficiency75
console.log(`total gallons of fuel for 23miles:${totalfuelfor23miles}`)

//Will your budget be enough to cover the fuel expense?

const fuelcostat55=totalfuelfor30miles * fuelcost

console.log(`fuelcostat55:${fuelcostat55}`)

const isbudgetat55 = (fuelbudget <= fuelcostat55)

console.log(`isbudgetat55 is enough:${isbudgetat55} No`)

//const fuelcostat60=totalfuelfor28miles * fuelcost
//const isbudgetat60 = (fuelbudget >= fuelcostat60)

//co//nsole.log(`isbudgetat60  is enough:${isbudgetat60}No`)

//const isbudgetat75 = (fuelbudget >= fuelcostat75)

//console.log(`isbudgetat75  is enough:${isbudgetat75}No`)

const fuelcostat60=totalfuelfor28miles * fuelcost

console.log(`fuelcostat60:${fuelcostat60}`)

const isbudgetat60 = (fuelbudget <= fuelcostat60)

console.log(`isbudgetat60  is enough:${isbudgetat60} No`)

const fuelcostat75=totalfuelfor23miles * fuelcost

console.log(`fuelcostat70:${fuelcostat75}`)
const isbudgetat75 = (fuelbudget <= fuelcostat75)

console.log(`isbudgetat75 is enough:${isbudgetat75} yes`)
//const totalfuelasperbudget=fuelbudget/fuelcost
//console.log(`At the budget of $175 we can have :${totalfuelasperbudget} gallon of fuel for the entire trip`)

//const noOftravelHrsAt55=totalfuelasperbudget * fuelefficiency55
//console.log(`With 58.3 gallon of fuel we can travel :${noOftravelHrsAt55} miles at the speed of 55miles/hr ` )
//const budget= (totalfuelasperbudget >= noOftravelHrsAt55)
///console.log(`is budget enough At 55 miles /hr :${budget}No`)
//const noOftravelHrsAt60=totalfuelasperbudget* fuelefficiency60
//console.log(`With 58.3 gallon of fuel we can travel :${noOftravelHrsAt60} miles at the speed of 60miles/hr ` )
//const budgetat60= (totalfuelasperbudget >= noOftravelHrsAt60)
//console.log(`is budget enough At 60 miles /hr :${budget}No`)
//const noOftravelHrsAt75=totalfuelasperbudget* fuelefficiency75
//const budgetat75= (totalfuelasperbudget >= noOftravelHrsAt75)
//console.log(`is budget enough At 70 miles /hr :${budget}No`)

//console.log(`With 58.3 gallon of fuel we can travel :${noOftravelHrsAt75} miles at the speed of 75miles/hr ` )
//const isOver25 = (trip > noOftravelHrsAt55 || trip > noOftravelHrsAt55 || trip > noOftravelHrsAt55);
//console.log(`total miles of trip is :${trip}` and we can travel )
//How long will the trip take, in hours?

const totalnoofhrsfor55=trip / speed55
console.log(`Time for trip at 55 miles/hr:${totalnoofhrsfor55}`)
const totalnoofhrsfor60=trip / speed60
console.log(`Time for trip at 60 miles/hr:${totalnoofhrsfor60}`)
const totalnoofhrsfor75=trip / speed75
console.log(`Time for trip at 55 miles/hr:${totalnoofhrsfor75}`)




