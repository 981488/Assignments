/* Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.  */

let personName: string = "touqeer arshad"
let lowercaseName: string = personName.toLowerCase();
console.log(lowercaseName);
//step # 02 Show name in upper case.
let uppercaseName: string = personName.toUpperCase();
console.log(uppercaseName);
//step#03 show name in Titalcase.
let words: string[] = personName.split(" ");
let TitalcaseName: string = ""
for (let i = 0; i < words.length; i++){
    TitalcaseName +=words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase()+" "
};
console.log(TitalcaseName)