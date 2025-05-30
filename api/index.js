import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import SibApiV3Sdk from '@getbrevo/brevo'
import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const port = process.env.VITE_APP_PUERTO_BACKEND
const DB_NEWSLETTER = process.env.VITE_APP_DB_NEWSLETTER
const DB_APIKEY = process.env.VITE_APP_DB_APIKEY

const app = express()

const whitelist = [
	'https://pensionfi.com',
	'https://pensionfi-test.vercel.app',
	'https://www.pensionfi.com',
	'https://testing.pensionfi.com',
	'http://localhost:5173',
] // lista de sitios permitidos

const corsOptions = {
	origin: function (origin, callback) {
		// para solicitudes que se originan en el mismo sitio el "origin" es indefinido
		if (
			!origin ||
			origin.startsWith('http://localhost:') ||
			whitelist.indexOf(origin) !== -1
		) {
			callback(null, true)
		} else {
			callback('Not allowed by CORS ', origin) //callback(new Error('Not allowed by CORS')) esto envìa mucho texto de error
		}
	},
	optionsSuccessStatus: 200,
	credentials: true,
}

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi()

let apiKey = apiInstance.authentications['apiKey']
apiKey.apiKey = process.env.VITE_APP_APIKEY

async function sendMail(sender, message, subject) {
	try {
		let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail()

		sendSmtpEmail.subject = subject
		sendSmtpEmail.htmlContent = message
		sendSmtpEmail.sender = sender
		sendSmtpEmail.to = [
			{ email: 'nico@pensionfi.com', name: 'Nicolás Arrieta' },
		]
		sendSmtpEmail.cc = [
			{ email: 'mauro@pensionfi.com', name: 'Mauricio Pastorini' },
			{ email: 'hello.jmarquez@gmail.com', name: 'Javier Márquez' },
		]
		sendSmtpEmail.replyTo = {
			email: 'nico@pensionfi.com',
			name: 'Nicolás Arrieta',
		}
		sendSmtpEmail.headers = { 'Some-Custom-Name': 'unique-id-1234' }
		sendSmtpEmail.params = { parameter: 'My param value', subject: 'subject' }

		await apiInstance.sendTransacEmail(sendSmtpEmail)
		console.log('Email sent successfully!')
		return true
	} catch (error) {
		console.error('Error sending email:', error)
		return false
	}
}

app.get('/', (req, res) => {
	res.send({ msg: 'respuesta ok' })
})

app.post('/contacto', (req, res) => {
	console.log(req.body)
	const verfying = async () => {
		const name = req.body.name
		const email = req.body.email
		const subject = req.body.subject
		const msg = req.body.msg
		if (
			name == undefined ||
			email == undefined ||
			subject == undefined ||
			msg == undefined
		) {
			return res
				.status(400)
				.send({ msg: 'todos los campos requeridos', status: 400 })
		}
		if (name == '' || email == '' || subject == '' || msg == '') {
			message = 'Hay campos incompletos'

			return res
				.status(400)
				.send({ msg: 'Hay campos incompletos', status: 400 })
		} else {
			const sender = { name: 'Mauro', email: 'mauro@pensionfi.com' }
			const message = `<html><body><h1>${subject}</h1><p>Remitente: ${name}</p><p>${msg}</p></body></html>`

			await sendMail(sender, message, subject)
			res.status(200).send({ msg: '¡Mensaje enviado con éxito' })
		}
	}
	verfying()
})

app.post('/contactar-asesores', (req, res) => {
	// console.log(req.body)
	const verfying = async () => {
		const name = req.body.name
		const genero = req.body.genero
		const saldo = req.body.saldo
		const edad = req.body.edad
		const mail = req.body.mail
		const telefono = req.body.telefono
		const whatsapp = req.body.whatsapp

		const pension = req.body.pension
		if (
			name == undefined ||
			genero == undefined ||
			saldo == undefined ||
			edad == undefined ||
			pension == undefined
		) {
			return res
				.status(400)
				.send({ msg: 'todos los campos requeridos', status: 400 })
		}
		if (telefono == '' && mail == '' && whatsapp == '') {
			return res.status(400).send({
				msg: 'Al menos un método de contaco es necesario.',
				status: 400,
			})
		}
		if (
			name == '' ||
			genero == '' ||
			saldo == 0 ||
			edad == 0 ||
			pension == ''
		) {
			message = 'Hay campos incompletos'

			return res
				.status(400)
				.send({ msg: 'Hay campos incompletos', status: 400 })
		} else {
			const subject = `Pensión tipo: ${pension}`
			const sender = { name: 'Mauro', email: 'mauro@pensionfi.com' }
			const message = `<html><body>
				<h1>Quiero contactar a un asesor</h1>
				${name ? `<p>Nombre: ${name}</p>` : ''}
				${genero ? `<p>Género: ${genero}</p>` : ''}
				${edad ? `<p>Edad: ${edad}</p>` : ''}
				${saldo ? `<p>Saldo: ${saldo}</p>` : ''}
				${pension ? `<p>Tipo de pensión: ${pension}</p>` : ''}
				<p>Medio de contacto:</p>
				${mail ? `<p>Email: ${mail}</p>` : ''}
				${telefono ? `<p>Teléfono: ${telefono}</p>` : ''}
				${whatsapp ? `<p>Whatsapp: ${whatsapp}</p>` : ''}
				</body></html>`

			await sendMail(sender, message, subject)
			res.status(200).send({ msg: '¡Mensaje enviado con éxito' })
		}
	}
	verfying()
})

app.post('/waitlist', async (req, res) => {
	const correo = req.body.correo
	const nombre = req.body.name

	console.log(nombre, correo)

	if (nombre == undefined || correo == undefined) {
		return res
			.status(400)
			.send({ msg: 'todos los campos requeridos', status: 400 })
	}
	if (nombre == '' || correo == '') {
		return res.status(400).send({ msg: 'Hay campos incompletos', status: 400 })
	} else {
		const subject = 'Suscrito a newsletter Pensionfi'
		const sender = { name: 'Mauro', email: 'mauro@pensionfi.com' }
		const message = `<html><body><p>Nombre: ${nombre}</p><p>${correo}</p></body></html>`

		await sendMail(sender, message, subject)

		//CONEXION A LA BASE DE DATOS
		const options = {
			method: 'POST',
			url: DB_NEWSLETTER,
			headers: {
				'Content-Type': 'application/json',
				apiKey: DB_APIKEY,
			},
			data: { correo: correo, nombre: nombre },
		}
		const txt = 'hola'
		try {
			const response = await axios(options)
			// console.log(response)
			res.status(response.status).send(response.data)
		} catch (error) {
			// console.error(error.response.data)
			res.status(error.response.status).json(error.response.data)
		}
	}
})

app.options('*', cors(corsOptions))
app.post('/ObtenerCuotas', async (req, res) => {
	const { listaAFPs, listaFondos, fechaInicial, fechaFinal } = req.body
	// console.log(req.body)
	console.log(req.body)
	// Convierte las listas en cadenas de texto separadas por comas
	const afps = listaAFPs.join(',')
	const fondos = listaFondos.join(',')

	const options = {
		method: 'GET',
		url: `https://www.quetalmiafp.cl/api/Cuota/ObtenerCuotas?listaAFPs=${afps}&listaFondos=${fondos}&fechaInicial=${fechaInicial}&fechaFinal=${fechaFinal}`,
		headers: {
			'Content-Type': 'application/json',
		},
	}
	try {
		const response = await axios(options)
		res.json(response.data)
	} catch (error) {
		console.error(error)
		res.status(500).json({ error: 'Error al obtener los datos de las AFPs' })
	}
})
app.listen(port, () => {
	console.log(`Server runing at http://localhost:${port}`)
})
