const express = require('express')
const path = require('path')
const app = express()
const PORT = 8000


const store = {
    'banana' :{
        'name' : 'banana',
        'shape' : 'elongated',
        'color' : 'yellow'
    },
    'apple' :{
        'name' : 'apple',
        'shape' : 'circle',
        'color' : 'red'
    },
    'mango' :{
        'name' : 'mango',
        'shape' : 'oval',
        'color' : 'green/red'
    }
}


app.get('/',(request,response) => {
    response.sendFile(path.join(__dirname + '/index.html'))
    
})

app.get('/:fruits',(request,response) =>{
    const fruit = request.params.fruits
    if(store[fruit]){
        response.json(store[fruit])
    }
})

app.listen(process.env.PORT || PORT,()=> {
    console.log(`Server is running on ${PORT}`);
})