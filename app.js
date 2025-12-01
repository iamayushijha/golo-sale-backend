import express from 'express'

const app = express()


function about(req, res) {
 res.send("This is About Page")
}

app.get("/about", about)

app.get("/contact/:id", (req, res)=>{
    // res.send(`This is Contact Page ${2+2}`)
    res.send(req.params)
})




app.listen(3000,(connectionStatus)=>{
    console.log("Server is running")
})

