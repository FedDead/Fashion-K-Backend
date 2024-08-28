import { Request, Response } from 'express';
import Producto from '../models/producto';

//Controladores son los que reciben la respuesta del front y regresan las cosas del back

//      Request = recibes del cliente, Response = respuesta que le das
export const getProducts = async(req: Request, res: Response) => {
    const listproducts = await Producto.findAll();

    res.json(listproducts);
}

export const getProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await Producto.findByPk(id);

    if(product)
    res.json(product);
    else
    res.status(404).json({
        msg: `No existe el producto con el id ${id}`
    })
}

export const deleteProduct = async(req:Request, res:Response) => {
    const { id } = req.params;
    const product = await Producto.findByPk(id);

    if(!product){
        res.json({ 
            msg: `No existe un producto con el id ${id}`
        })
    }
    else{
        await product.destroy();
        res.json({
            msg: `El producto fue eliminado con exito`
        })
    }
}

export const postProduct = async(req:Request, res:Response) => {
    const { body } = req;
    const { id } = req.params;
 
    try{
        await  Producto.create(body);
        
        res.json({ 
            msg: 'Producto Agregado',
            body: body
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Error el producto con el id ${id} no pudo ser agregado`
        })
    }
    
}

export const updateProduct = async(req: Request, res:Response) => {
    const { body } = req;
    const { id } = req.params;
    
    try{
        const product = await Producto.findByPk(id);

        if(product){
            await product.update(body);
            res.json({
                msg: 'El producto fue actualizado',
                body: body
            });
        }
        else{
            res.status(404).json({
                msg: `No se pudo encontrar el producto con el id ${id}`
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ha ocurrido un error inesperado'
        });
    }
}

