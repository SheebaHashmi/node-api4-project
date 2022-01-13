const express = require('express')

const app = express();
app.use(express.json())
const users = [
    {
        id:Date.now(),
        username:'Bob Ross'
    },
    {
        id:Date.now(),
        username:'Kermit'
    },
    {
        id:Date.now(),
        username:'Elmo'
    }
]

app.get('/',(req,res) => {
    res.send(`<h1>Welcome Users</h1>`)
})

app.get('/api/users',(req,res) => {
    res.json({users})
})

app.post('/api/register',(req,res) => {
    const newUser = {id:Date.now(),username:req.body.username}
    users.push(newUser)
    res.json({users})
})

app.post('/api/login',(req,res) => {
    if(!req.body.username || !req.body.password){
        res.status(404).json('User not found')
        
    }
    else{
        res.status(200).json(`Welcome ${req.body.username}`)
    }

})

app.listen(9000,() => {
    console.log('magic happening at port 9000')
})