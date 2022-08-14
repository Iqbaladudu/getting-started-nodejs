const done = true;

const isItDoneYet = new Promise((resolve, reject) => {
    if (done) {
        const workDone = 'Here is the thing I built';
        resolve(workDone)
    } else {
        const why = 'Still working on something else';
        reject(why)
    }
})

isItDoneYet
    .then(data => console.log(data))
    .catch(err => console.error(err))