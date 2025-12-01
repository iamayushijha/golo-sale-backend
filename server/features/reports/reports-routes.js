import express from 'express'

const router = express.Router()

router.delete("/delete" ,(req, res)=>{
    res.send("Deleted Successfully")
})

export default router

