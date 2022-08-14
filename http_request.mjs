import axios from "axios";

axios
    .get('https://example.com/todos')
    .then(res => {
        console.log('Success')
    })
    .catch(error => {
        console.error(error)
    })