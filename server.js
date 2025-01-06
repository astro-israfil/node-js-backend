const express = require("express")
const app = express()
const PORT = 8383

let data = [
    {
        name: "Israfil",
    }
]

// Middleware
app.use(express.json())



//HTTP Verbs and Routes or (path)


// Website endpoints
app.get("/", (req, res) => {
    res.send(`
        <body>
            <h1>Homepage</h1>
            <p>Data: </P>
            ${JSON.stringify(data)}

            <a href="/dashboard">Dashboard</a>
            <script>
                console.log("This is from script tag")
            </script>
        </body>    
    `)
})

app.get("/dashboard", (req, res) => {
    res.send(`
        <body>
            <h1>Dashboard</h1>
            <a href="/">Homepage</a>
            <script>
                console.log("This is from script tag")
            </script>
        </body>    
    `)
})

// API endpoints
// CRUD method Create- post, read-get, updata-put, delete-delete

// read data
app.get("/api/data", (req, res) => {
    res.status(200).send(data)
})

// create data 
app.post("/api/data", (req, res) => {
    // create a new user when signup
    const user = req.body
    data.push(user)
    res.sendStatus(201)
})


app.delete("/api/data", (req, res) => {
    const user = req.body
    const newData = data.filter((userData) => userData.name !== user.name)
    data = newData
    res.send(user)
})

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))