import {Router,Request,Response} from "express";
import {products} from "../setting";



export const productsRoute = Router({})


productsRoute.get('/', (req:Request, res:Response) => {
    res.send(products)
})

productsRoute.get('/', (req:Request, res:Response) => {
    if(req.query.title){
        let value = req.query.title.toString()
        res.send(products.filter(p=>p.title.indexOf(value)>-1))
    }
    res.send(products)
})

productsRoute.get('/:productTitle', (req:Request, res:Response) => {
    let titleFromFront = req.params.productTitle
    let item = products.find(el=>el.title===titleFromFront)
    if(item){
        res.send(item)
    } else {res.send(404)}

})

productsRoute.post('/',(req:Request,res:Response)=>{
    const newProduct = {id:+new Date(),title:req.body.title}
    products.unshift(newProduct)
    res.status(201).send(newProduct)
})