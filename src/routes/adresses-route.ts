import {Router,Request,Response} from "express";


export const adressesRoute = Router({})

export const adresses = [{id:1,value:'house2'},{id:2,value:'building4'}]

adressesRoute.put('/:id',(req:Request,res:Response)=>{
    let oneAdress = adresses.find(e=>e.id===+req.params.id)
    if(oneAdress){
        oneAdress.value=req.body.value
        res.send(oneAdress)
    }else {res.send(404)}
})


adressesRoute.get('/', (req:Request, res:Response) => {
    res.send(adresses)
})
adressesRoute.get('/:id', (req:Request, res:Response) => {
    let idIntoUrl = req.params.id
    let item = adresses.find(e=>e.id===+idIntoUrl)
    if(item){
        res.send(item)
    }else {res.send(404)}

})

adressesRoute.delete('/:id',(req:Request,res:Response)=>{
    for(let i=0;i<adresses.length;i++){
        if(adresses[i].id===+req.params.id){
            adresses.splice(i,1)
            res.send(204)
            return
        }
    } res.send(404)
})