const express = require('express'); 
const app = express(); 
const port = 3001;
let counter = -1; 

function incrementCounter() {
    setInterval(() => {
        counter++;
        console.log(counter);
    }, 1000);
}

incrementCounter();

app.get('/', (req, res) => {
    res.send(`${counter}`);
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
})


