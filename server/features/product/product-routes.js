import express from 'express' 

const router = express.Router()

router.get("/list", (req, res )=>{
    res.send("Product Tab")
})

export default router