import expres from 'express';

const app = expres()

app.get('/', (req, res) => {
  res.send('<h1>Biendenido</h1>')
})
app.get('/about', (req, res) => {
  res.send('<h1>About</h1>')
})

app.listen(3000, () => {
  console.log(`Escuchando en el puerto ${3000}`);
})
