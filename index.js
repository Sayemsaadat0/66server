const express = require('express')
const cors = require ('cors')
const app = express()
const port = process.env.PORT || 7979

app.use(cors())


const users = [
    {
        id : 1,
        name : 'bubli',
        email : 'bubli@bubla'
    },
    {
        id : 2,
        name : 'habli',
        email : 'habli@habla'
    },
    {
        id : 3,
        name : 'khabli',
        email : 'khabli@bubla'
    },
    {
        id : 4,
        name : 'chubla',
        email : 'chubla@bubla'
    },
]



app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
app.get('/users', (req, res) => {
    res.send(users)
  })
  

app.listen(port, ()=>{
    console.log(`server is running : ${port}`)
})