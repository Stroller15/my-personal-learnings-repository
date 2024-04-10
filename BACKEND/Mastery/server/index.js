import express from 'express'
import cors from 'cors'



const app = express();
app.use(cors());

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            author: "Anonymous",
            joke: "Why don't scientists trust atoms? Because they make up everything!"
        },
        {
            id: 2,
            author: "Unknown",
            joke: "Parallel lines have so much in common. It's a shame they'll never meet."
        },
        {
            id: 3,
            author: "Comedian",
            joke: "I told my wife she was drawing her eyebrows too high. She looked surprised."
        },
        {
            id: 4,
            author: "Jokester",
            joke: "Why did the scarecrow win an award? Because he was outstanding in his field."
        },
        {
            id: 5,
            author: "Anonymous",
            joke: "Why don't skeletons fight each other? They don't have the guts."
        }
    ];
    
    res.send(jokes);
    
})

app.listen(4000, () => {
    console.log("server is running")
})