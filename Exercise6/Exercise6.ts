// Stripping Names: Store a person's name, and include some whitespace chracters at the begning and the end of the name.Make sure you use each chracter combination "\t"and "\n", at least once.Print the name once, so the white space around the name is diplayed. Then print the name after striping the whitespaces.

let personName: string = "\t Touqeer Arshad \n";
console.log("Name with whitespace:", personName)

let strippedName: string = personName.trim()
console.log("Stripped name:", strippedName)