const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.resolve(__dirname,'./public')
app.use(express.static('public'))

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

const port = process.env.PORT || 3000

app.listen(port, () => console.log('iniciando servidor en el puerto 3000'));

let productos = [
	{
		id: 1,
		nombre: 'Cafetera Moulinex',
		precio: '$6.770',
		descuento: '40% off',
		imagen: '/images/img-cafetera-moulinex.jpg'
	},
	{
		id: 2,
		nombre: 'MacBook Pro 2019',
		precio: '$230.000',
		descuento: '20% off',
		imagen: '/images/img-macbook-pro-2019.jpg'
	},
	{
		id: 3,
		nombre: 'Samsung Galaxy S10',
		precio: '$70.500',
		descuento: '10% off',
		imagen: '/images/img-samsung-galaxy-s10.jpg'
	},
	{
		id: 4,
		nombre: 'SmartTv Samsung 43"',
		precio: '$23.200',
		descuento: '5% off',
		imagen: '/images/img-tv-samsung-smart.jpg'
	}
]




app.get('/', (req,res) => {
	res.render('home', {productos:productos});
})
app.get('/detalle/:id', (req,res)=>{
	let productoId = productos.find(producto => req.params.id == producto.id)
	res.render('detail', {producto: productoId})
})

app.get('/register', (req,res) => {
	res.render('register');
})
app.get('/login', (req,res) => {
	res.render('login');
})
// app.post('/home', (req,res) => {
// 	res.sendFile(path.join(__dirname, '/views/home.ejs'));
// })

