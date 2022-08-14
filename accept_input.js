const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`Siapa nama kamu? `, name => {
    console.log(`Hai, ${name}!`)
    readline.close();
})