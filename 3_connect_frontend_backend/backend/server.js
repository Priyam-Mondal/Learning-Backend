import express from 'express';

const app = express();

// app.get('/',(req, res) => {
//     res.send("hello world");
// })

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "1st",
            content: "This is the first joke"
        },
        {
            id: 2,
            title: "2nd",
            content: "This is the second joke"
        },
        {
            id: 3,
            title: "3rd",
            content: "This is the third joke"
        },        
    ]
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})