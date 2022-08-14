const fs = require('fs')

fs.readFile('./read_file.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(data)
})