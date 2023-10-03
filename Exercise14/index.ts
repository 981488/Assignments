/* Guest List: If you could invite anyone, living or deceased, who wuld you invite? Make a list that includes at least three people you had like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner. */

let guestList: Array<string> = [
    "Zia khan",
    "Jahanzaib Tayab",
    "Dr Abdulqadir khan",
    "Bilgate",
    "Babar Azam"
];
guestList.forEach((guestName) => {
    console.log(`Dear ${guestName},you are invited to dinner please join us.`)
}) 

    
