import db from '../../db/connection'
import { DataTypes } from 'sequelize'

const Dressed = db.define(
    'dressed',
    {   
        id_product  :{
            type: DataTypes.NUMBER
        },
        marca_dressed:{
            type:DataTypes.STRING
        },
        precio_dressed:{
            type:DataTypes.NUMBER
        }
    },{
        createdAt: false,
        updatedAt: false
});

export default Dressed;