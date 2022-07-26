import express from 'express'
import { db } from './database/db'
import router from './routes/routes'

const app = express()

app.use(express.json())
app.use(router)

const port = 3000

app.listen(port, async() => {
  await db.sync()
  console.log(`Server started on port ${port}`)
})
