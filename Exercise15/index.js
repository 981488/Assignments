"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
/* Changing Guest List: You just heard that one of your guest can't make the dinner, so you need to send out a new set of invitations. You will have to think of someone else
to invite.
Start with your program from exercise 14. Add a print statement at the end of your program stating the name of the guest who can't make it.
Modify your list, replacing the name of the guest who can't make it with the name of the new person you are inviting.
*/
let guestList = [
    "Zia khan",
    "Jahanzaib Tayab",
    "Dr Abdulqadir khan",
    "Bilgate",
    "Babar Azam"
];
exports.guestList = guestList;
//  Print the name of person who can't make it dinner.
let guestHowCantMakeIt = "Dr Abdulqadir khan";
console.log(`${guestHowCantMakeIt} can't make it to Dinner`);
// Replace the name of Guest who can't make it dinner.
let newGuest = "Imran khan";
let indexOfguestHowCantMakeIt = guestList.indexOf(guestHowCantMakeIt);
// console.log(indexOfguestHowCantMakeIt)
if (indexOfguestHowCantMakeIt !== -1) {
    guestList[indexOfguestHowCantMakeIt] = newGuest;
}
// console.log(guestList[2])
// Print second set of invitation messages
console.log("Second set of invitation messages:");
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are invited to dinner please join us.`);
});
