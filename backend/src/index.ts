import express from 'express'
import authrouter from './routes/auth_routes.ts'
const app= express()

app.use(express.json())

app.use('/api/auth',authrouter)

app.get("/",(req,res)=>{
    res.send("hello")
})
app.listen(3000)