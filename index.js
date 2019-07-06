const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const path = require('path')
const port = process.env.PORT || 3000

app.set('views', path.join(__dirname, 'views'))
//faz o ejs tratar a formatação da pagina web
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.urlencoded({ extended: true}))

app.get('/', async (request, response) => {
    response.render('home')
})

app.get('/axis', async (request, response) => {
    response.render('axis')
})

const init = async () => {
    
}

init()

app.listen(port, (err) => {
    if(err){
        console.log('Não consigo iniciar o servidor!')
    }else{
        console.log('Servidor Rodando...')
    }
})