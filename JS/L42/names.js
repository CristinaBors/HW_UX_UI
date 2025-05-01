let names = [
    "John Doe",
    "Marry Poppins",
    "Pete Cork",
    "Jake Solomon",
    "Vasilii Sviatoi",
]

for ( let i=0; i<5; i++) {
    console.log(names[i])
}


let nameToFind = prompt("Name to find: ")
for (let i = 0; i < 5; i++) {
    if (names[i] == nameToFind) {
        console.log(`${nameToFind} found!`)
    }
}