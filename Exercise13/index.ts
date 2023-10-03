/*your own array: Think of your favorite mode of transportation, such as a motercycle or a car, and make a list that stores several examples.use your list
to print a series of statements about these item, such as " I would like to own a honda motercycle."*/

let favoriteTransportation: Array<[transport: string, brand: string]> = []
favoriteTransportation.push(["motercycle", "Honda"])
favoriteTransportation.push(["Car", "kia moters"])
favoriteTransportation.push(["bicycle", "Sohrab"])
// console.log(favoriteTransportation)
// To print a series of state for each loop we use  for loop

favoriteTransportation.forEach(([transport, brand])=> {console.log(` I would like to own a ${brand} ${transport}`)}

)
