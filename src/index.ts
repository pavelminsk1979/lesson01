import express,{Request,Response} from 'express'
const app = express()
const port = 3000

const products = [{title:'tomato'},{title:'orange'}]
const adresses = [{value:'house2'},{value:'building4'}]

app.get('/products', (req:Request, res:Response) => {
    res.send(products)
})
app.get('/products/:productTitle', (req:Request, res:Response) => {
    let titleFromFront = req.params.productTitle
    let item = products.find(el=>el.title===titleFromFront)
    if(item){
        res.send(item)
    } else {res.send(404)}

})
app.get('/adresses', (req:Request, res:Response) => {
    res.send(adresses)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})