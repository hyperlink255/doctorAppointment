import User from '../models/UserSchema.js'
import Doctor from '../models/DoctorSchema.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const generateToken = (user) => {
    return jwt.sign({id:user._id,role:user.role},process.env.JWT_KEY,{expiresIn:"30d"})
}

export const register = async (req,res) => {
    const {email,password,name,photo,gender,role} = req.body
    try{
        let user = null
        if(user === "patient"){
            user = await User.findOne({email})
        }else if(role === "doctor"){
            user = await Doctor.findOne({email})
        }
        
        if(user){
            return res.status(400).json({message:"user already exist"})
        }
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password,salt)
        
        if(role === "patient"){
            user =  new User({
                name,
                email,
                password:hashPassword,
                photo,
                gender,
                role
            })
        }
        if(role === "doctor"){
            user = new Doctor({
                name,
                email,
                password:hashPassword,
                photo,
                gender,
                role
            })
        }
        await user.save()
        res.status(200).json({success:true,message:"user successfully created"})
        
    }catch(err){
        res.status(500).json({success:false,message:err})
    }

} 

export const login = async (req,res) => {

    const {email,password} = req.body
    try{

        let user = null
        const patient = await User.findOne({email})
        const doctor = await Doctor.findOne({email})
        if(patient){
            user = patient
        }
        if(doctor){
            user = doctor
        }
        if(!user){
            return res.status(400).json({message:"User not found"})
        }
        const isPasswordMatch = await bcrypt.compare(password,user.password)
        if(!isPasswordMatch){
            return res.status(400).json({message:"Invalid credentials"})
        }
        const token = generateToken(user)
        const {passwor,role,appointments, ...rest} = user._doc
        res.status(200).json({status:true,message:"Successfully login",token,data:{...rest},role})
    }catch(err){
        res.status(500).json({message:err,success:false})

    }

}