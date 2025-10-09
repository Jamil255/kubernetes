import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000

app.get(' pi/v6/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date(), message: 'api v7' })
})

app.get('/', (req, res) => {
  res.send('Hello from kubernates v7')
})
app.get('/update', (req, res) => {
  res.send('Update Page v4')
})

app.get('/api/v8/blog', (req, res) => {
  return res.json({ message: 'we are very excitied to lunch our blog feature' })
})

app.get('/about', (req, res) => {
  res.send('About Page v4')
})

app.get('/contact', (req, res) => {
  res.send('Contact Page v4')
})

app.get('/products', (req, res) => {
  res.send('Products Page v4')
})

app.get('/exit', (req, res) => {
  res.send('Server is shutting down')
  process.exit(0)
})
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
