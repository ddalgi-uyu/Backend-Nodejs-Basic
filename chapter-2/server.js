const express = require('express')
const app = express()
const PORT = 8383

let data = ["Nelly"]

// Middleware
// server expect json as incomming data
app.use(express.json())

// Respond
app.get("/", (req, res) => {
    console.log("Yay I hit an endpoint.")
    res.send(`
        <body style="background:pink;color:blue;">
            <h1>Data:</h1>
            <p>${JSON.stringify(data)}</p>
            <a href="/dashboard">Dashboard</a>
        </body>
        <script>console.log("This is a script!")</script>
    `
    )
})

// Page
app.get("/dashboard", (req, res) => {
    res.send(`
        <body>
            <h1>Dahboard</h1>
            <a href="/">Home</a>
        </body>
    `
    )
})

// Data
app.get("/api/data", (req, res) => {
    console.log("Sending requested data...")
    res.status(200).send(data)
})

app.post("/api/data", (req, res) => {
    const newEntity = req.body
    data.push(newEntity.name)
    res.sendStatus(201)
})

app.delete("/api/data", (req, res) => {
    data.pop()
    res.sendStatus(203)
})

app.listen(PORT, () => console.log(`Server has started on port: ${PORT})`))