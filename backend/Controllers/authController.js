import User from "../models/UserSchema.js"
import Doctor from "../models/DoctorSchema.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'


export const register = async(req,res)=>{

    const{email, password,name,role,photo,genero} = req.body
    try {


       let user = null

        if( role ==='paciente'){
            user = User.findOne({email})
        } else if(role ==='doctor'){
            user = Doctor.findOne({email})
        }

        //Comprobando si el usuario existe
        if(user){
            return res.status(400).json({message:'El usuario ya existe'})
        }

        //password

        const salt = await bcrypt.hash(password,salt)

        const hashPassword = await bcrypt.hash(password,salt)


        if(role==='paciente'){
            user= new User({
                name,
                email,
                password:hashPassword,
                photo,
                genero,
                role
            })
        }

        if(role==='doctor'){
            user= new Doctor({
                name,
                email,
                password:hashPassword,
                photo,
                genero,
                role
            })
        }

        await user.save()

        res.status(200).json({success:true,menssage:'Usuario creado con exito'})

    } catch (err) {
        res.status(500).json({success:false,menssage:'Error interno, intentalo de nuevo'})
    }
    
}
export const login = async(req,res)=>{
    try {
        
    } catch (err) {
        
    }
}