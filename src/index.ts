import express,{Request,Response} from 'express'
export const app = express()
const port = 3000

app.use(express.json())

let  products = [{title:'tomato'},{title:'orange'}]
const adresses = [{id:1,value:'house2'},{id:2,value:'building4'}]

app.get('/products', (req:Request, res:Response) => {
    if(req.query.title){
        let value = req.query.title.toString()
        res.send(products.filter(p=>p.title.indexOf(value)>-1))
    }
    res.send(products)
})
app.get('/products/:productTitle', (req:Request, res:Response) => {
    let titleFromFront = req.params.productTitle
    let item = products.find(el=>el.title===titleFromFront)
    if(item){
        res.send(item)
    } else {res.send(404)}

})

app.post('/products',(req:Request,res:Response)=>{
    const newProduct = {id:+new Date(),title:req.body.title}
    products.unshift(newProduct)
    res.status(201).send(newProduct)
})

app.put('/adresses/:id',(req:Request,res:Response)=>{
    let oneAdress = adresses.find(e=>e.id===+req.params.id)
    if(oneAdress){
      oneAdress.value=req.body.value
        res.send(oneAdress)
    }else {res.send(404)}
})


app.get('/adresses', (req:Request, res:Response) => {
    res.send(adresses)
})
app.get('/adresses/:id', (req:Request, res:Response) => {
    let idIntoUrl = req.params.id
    let item = adresses.find(e=>e.id===+idIntoUrl)
    if(item){
        res.send(item)
    }else {res.send(404)}

})

app.delete('/adresses/:id',(req:Request,res:Response)=>{
    for(let i=0;i<adresses.length;i++){
        if(adresses[i].id===+req.params.id){
            adresses.splice(i,1)
            res.send(204)
            return
        }
    } res.send(404)
})

app.delete('/__test__/data',(req:Request,res:Response)=>{
    products=[]
    res.sendStatus(204)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})