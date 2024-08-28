import db from '../db/connection'
import { DataTypes } from 'sequelize'

const User = db.define(
    'users',
    {
        email_address:{
            types: DataTypes.STRING
        },
        first_name:{
            types: DataTypes.STRING
        },
        last_name:{
            types: DataTypes.STRING
        }
    })

export default User;