import db from '../../db/connection';
import { DataTypes } from 'sequelize';

const Producto = db.define(
    'product',
    {
    name_product: {
        type: DataTypes.STRING
    },
    type_product: {
        type: DataTypes.STRING
    }
},{
    createdAt: false,
    updatedAt: false
});


export default Producto;