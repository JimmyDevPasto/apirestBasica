import { response } from "express"

const usuariosGet = (req= request, res= response) =>{
    const {q,nombre= 'No name',page='1',limit}= req.query;
    res.json({
        msg:'Get api -controlador',
        q,
        nombre,
        page,
        limit
        
    })
}
const usuariosPut =  (req, res) =>{

    const {id}= req.params; 
    res.json({
        msg:'put api -controlador',
        id
        
    })
}

const usuariosPost=(req, res) =>{
    const {nombre, edad} = req.body; 
    res.status(201).json({
        msg:'postapi -controlador',
        nombre,
        edad
        
    })
}

const usuariosDelete =(req, res) =>{
    res.json({
        msg:'delete api-controlador'
        
    })
}

const usuariosPatch =(req, res) =>{
    res.json({
        msg:'patch api-cntrolador'
        
    })
}

export {
usuariosGet,
usuariosPut,
usuariosPost,
usuariosDelete,
usuariosPatch

}