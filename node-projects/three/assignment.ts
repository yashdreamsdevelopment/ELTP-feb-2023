import express from 'express';

const app = express();

app.use((req, res, next) => {
    res.send("Savory")
});

app.use((req, res, next) => {
    res.send("Sweet");
})

app.listen(
    3000,
    () => console.log('SERVER STARTED ON PORT 3000')
)