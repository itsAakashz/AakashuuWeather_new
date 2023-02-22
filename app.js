const Express= require("express")
const app=Express()
const port = process.env.PORT || 8000



app.use(Express.static('views'))

//home page
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//weather page
//app.get('/Weather', (req, res) => {
//  res.send('Weather page')
//})

    

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 
