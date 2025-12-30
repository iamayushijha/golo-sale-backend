import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import appRoutes from './server/routes/app-routes.js'
import ResponseHandler from './server/common/reponse_handler.js'

const app = express()  //we create an instance  of express
app.use(express.json()) 
app.use(cors()) //cors site allowed 
dotenv.config()  //dotenv backend initialized

console.log(process.env.DB_HOST)
app.use('/', appRoutes)

// app.all('*', (req, res)=>{
//     res.send("All Routes ")
// })

app.all('/*splat', (req, res) => {
  ResponseHandler.error(res, 'There is no such Page', 404)
})


app.listen(3000)




