import { Express, Request, Response, request, response } from 'express';
import Dressed from '../models/dressed';

//Controladores son los que reciben la respuesta del front y regresan las cosas del back

//      Request = recibes del cliente, Response = respuesta que le das
export const getsDressed = async(req: Request, res: Response) => {
    const listproducts = await Dressed.findAll();

    res.json(listproducts);
}

export const getDressed = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await Dressed.findByPk(id);

    if(product)
    res.json(product);
    else
    res.status(404).json({
        msg: `No existe el Dressed con el id ${id}`
    })
}

export const deletDressed = async(req:Request, res:Response) => {
    const { id } = req.params;
    const product = await Dressed.findByPk(id);

    if(!product){
        res.json({ 
            msg: `No existe un Dressed con el id ${id}`
        })
    }
    else{
        await product.destroy();
        res.json({
            msg: 'El Dressed fue eliminado con exito'
        })
    }
}

export const postDressed = async(req:Request, res:Response) => {
    const { body } = req;
    const { id } = req.params;
 
    try{
        await  Dressed.create(body);
        
        res.json({ 
            msg: 'Vestido Agregado',
            body: body
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Error el vestido con el id ${id} no pudo ser agregado`
        })
    }
    
}

export const updateDressed = async(req: Request, res:Response) => {
    const { body } = req;
    const { id } = req.params;
    
    try{
        const product = await Dressed.findByPk(id);

        if(product){
            await product.update(body);
            res.json({
                msg: 'El vestido fue actualizado',
                body: body
            });
        }
        else{
            res.status(404).json({
                msg: `No se pudo encontrar el vestido con el id ${id}`
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ha ocurrido un error inesperado'
        });
    }
}

