// Greetings: Start with the array you used in exercise 11, but instead of just printing each person's name, print a message to them. The text of each message shoud be the same,
// but each message shoud be personlaized with the person's name.

let names: string[] = ['Shakeel', 'Ali', 'Usman', 'Arjasab'];
// Using for loop through each name in the array 
for (let name of names) {
    // here we print a personalize message for each friend 
    console.log(`Good morning ${name}, i hope you are doing well these days!`)
}