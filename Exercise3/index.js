"use strict";
/* Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.  */
let personName = "touqeer arshad";
let lowercaseName = personName.toLowerCase();
console.log(lowercaseName);
//step # 02 Show name in upper case.
let uppercaseName = personName.toUpperCase();
console.log(uppercaseName);
//step#03 show name in Titalcase.
let words = personName.split(" ");
let TitalcaseName = "";
for (let i = 0; i < words.length; i++) {
    TitalcaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
console.log(TitalcaseName);
