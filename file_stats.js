const fs = require('fs')

fs.stat('/home/iqbaladudu/Documents', (err, stats) => {
    if (err) {
        return console.error(err)
    }

    console.log(stats)
})