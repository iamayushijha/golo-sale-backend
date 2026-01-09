import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import appRoutes from './server/routes/app-routes.js'
import ResponseHandler from './server/common/reponse_handler.js'


const app = express()  //we create an instance  of express
app.use(express.json()) 
app.use(cors()) //cors site allowed 
dotenv.config()  //dotenv backend initialized


app.use('/', appRoutes)

// app.all('*', (req, res)=>{
//     res.send("All Routes ")
// })


// Serve images
app.use('/images', express.static('uploads/'));

app.all('/*splat', (req, res) => {
  ResponseHandler.error(res, 'There is no such Page', 404)
})


app.listen(3000,(serv)=>console.log("Server is running"))




