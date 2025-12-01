import express from 'express'

const router = express.Router()

router.get("/list", (req, res)=>{
    res.send("This is Promotions Page")
})


export default router