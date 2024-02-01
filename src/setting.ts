import express,{Request,Response} from 'express'
import {productsRoute} from "./routes/products-route";
import {adressesRoute} from "./routes/adresses-route";
export const app = express()


app.use(express.json())

app.use('/products', productsRoute)

app.use('/adresses', adressesRoute)

export let  products = [{title:'tomato'},{title:'orange'}]

app.delete('/__test__/data',(req:Request,res:Response)=>{
    products=[]
    res.sendStatus(204)
})
