import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import connectDB from './config/db.js'
import authRoute from './routes/authRouter.js'
import doctorRoute from './routes/doctorRouter.js'
import userRoute from './routes/userRouter.js'
import reviewRoute from './routes/reviewRouter.js'

import 'dotenv/config'
const app = express()

app.use(cors({
  origin:true
}))
app.use(express.json())
app.use(cookieParser())
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/users', userRoute)
app.use('/api/v1/doctors', doctorRoute)
app.use('/api/v1/reviews', reviewRoute)



app.get('/', (req, res) => res.send("API Working"));


const PORT = process.env.PORT || 4000
if (process.env.NODE_ENV !== "production") {
app.listen(PORT, () => {
  connectDB()
  console.log("SERVER IS RUNNIG")
})
}
export default app
