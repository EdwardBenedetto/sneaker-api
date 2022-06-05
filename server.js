const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8000

app.use(cors())

const sneakers = {
    'huf': {
        'releaseYear': 2004,
        'color': 'black/tie-dye',
        'inspo': 'HUF store in San Francisco',
        'image': 'https://ibb.co/T2w1b3S_'
    },
    'gino': {
        'releaseYear': 2002,
        'color': 'obsidian/light graphite-black',
        'inspo': 'Pro skater Gino Iannucci',
        'image': 'https://ibb.co/HVwtH6J'
    },
    'supreme': {
        'releaseYear': 2002,
        'color': 'white/black-cement grey',
        'inspo': 'NY skateshop Supreme',
        'image': 'https://ibb.co/s9Qk9Qq'
    },
    'brian anderson': {
        'releaseYear': 2006,
        'color': 'camo/orange',
        'inspo': 'Pro skater Brian Anderson',
        'image': 'https://ibb.co/bWqjTVw'
    },
    'what the dunk': {
        'releaseYear': 2007,
        'color': 'various',
        'inspo': 'mashup of a number of popular Dunk CCs at the time',
        'image': 'https://ibb.co/3k8LYyD'
    },
    'reese forbes': {
        'releaseYear': 2002,
        'color': 'wheat/twig-dune',
        'inspo': 'Pro skater Reese Forbes',
        'image': 'https://ibb.co/bHN0YKY'
    },
    'stussy': {
        'releaseYear': 2005,
        'color': 'shy pink/vanilla',
        'inspo': 'Streetwear brand Stussy',
        'image': 'https://ibb.co/qYCfNZ3'
    },
    'diamond': {
        'releaseYear': 2005,
        'color': 'aqua/chrome',
        'inspo': 'Streetwear brand Diamond',
        'image': 'https://ibb.co/5hM9qTf'
    },
    'doom': {
        'releaseYear': 2007,
        'color': 'black/black-midnight fog',
        'inspo': 'Rapper MF DOOM',
        'image': 'https://ibb.co/LhhLJPp'
    },
    'tokyo': {
        'releaseYear': 2004,
        'color': 'muslin/muslin',
        'inspo': 'Tokyo',
        'image': 'https://ibb.co/pdB0qCY'
    },
    'unknown': {
        'releaseYear': '?',
        'color': '?',
        'inspo': '?',
        'image': '?'
    }
}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(request,response)=>{
    const selection = request.params.name.toLowerCase()

    if( sneakers[selection] ){
        response.json(sneakers[selection])
    }else{
        response.json(sneakers['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})