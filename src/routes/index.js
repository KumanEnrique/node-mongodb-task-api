import { Router } from "express";
const router = Router()

router.get('/',(req,res)=>{
    res.send("hola mundo desde el archivo de rutas")
})

export default router