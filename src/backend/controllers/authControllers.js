import { authServices } from '../services/authServices.js';
import { generateToken } from '../utils/auth.js';

export const authControllers = {
    //Registro
    async register(req, res){
        try{
            const {email, name, password } = req.body;
            const result = authServices.register({email, name, password});

            res.status (201).json({
                succes: true,
                message: "Usurio registrado exitosamente",
                data: result
            });

        }catch (error) {
            res.status(500).json({
                succes: false,
                message: error.message
            });

        }
    },

    //Google calllback
    async googleCallBack(){
        try{
            const user = req.user;
            const token = generateToken (user.id, user.email);
            res.redirect(`http://localhost:5173/`) // aqui url de frontend 

        }catch(error){
            res.redirect(`http://localhost:5173/`); //Aqui vista de fronted si falla   
        }
        
    }

};

