const express = require('express')
const routes = require('./src/routes')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(port, () => {
    console.log(`API RODANDO NA PORTA ${port}`)
})