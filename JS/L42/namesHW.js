let names = [
    "John Doe",
    "Marry Poppins",
    "Pete Cork",
    "Jake Solomon",
    "Vasilii Sviatoi",
]

/*for (let i = 1; i < names.length - 1; i++) {
    console.log(`${i}. ${names[i]}`);
}

let nameToFind = prompt("Name to find: ");
for (let i = 0; i < names.length; i++) {
    if (names[i] === nameToFind) {
        console.log(`${nameToFind} found!`);
    }
} */

let listNumber = 1;
for (let i = 1; i < names.length - 1; i++) {
    console.log(`${listNumber}. ${names[i]}`);
    listNumber++;
}

let nameToFind = prompt("Name to find: ");
for (let i = 0; i < names.length; i++) {
    if (names[i] === nameToFind) {
        console.log(`${nameToFind} found!`);
    }
}  