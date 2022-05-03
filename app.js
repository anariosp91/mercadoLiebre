const express = require('express');
const path = require('path');
const app = express();


const publicPath = path.resolve(__dirname,'./public')
app.use(express.static('public'))

const port = process.env.PORT || 3000

app.listen(port, () => console.log('iniciando servidor en el puerto 3000'));


app.get('/', (req,res) => {
	res.sendFile(path.join(__dirname, '/views/home.html'));
})
app.get('/register', (req,res) => {
	res.sendFile(path.join(__dirname, '/views/register.html'));
})
app.get('/login', (req,res) => {
	res.sendFile(path.join(__dirname, '/views/login.html'));
})
app.post('/home', (req,res) => {
	res.sendFile(path.join(__dirname, '/views/home.html'));
})