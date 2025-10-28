import { userServices } from '../services/userServices.js';

export const userControllers = {
    async getUsers (req, res){
        try{
            const users = await userServices.getAllUsers();
            res.status(200).json({
                succes: true, 
                data:users 
            })
        }catch(error){
            res.status(500).json({
                succes: false,
                message: error.message
            })
        }
    },

    async createUser (req, res){
        try{
            const {email, name} = req.body;
            //Validacion basica
            if(!email || !name) {
                return res.status(400).json({
                    succes:false,
                    message: 'Email y nombre son necesarios'
                });
            }

            const newUser = await userServices.createUser({email, name})
            res.status(201).json({
                succes:true,
                data:newUser,
                message: 'Usuario creado correctamente'
            });
        }catch(error){
            res.status(500).json({
                succes: false,
                message: error.message
            })
        }  
    },

    async updateUSer (req, res){
        try{
            const {id} = req.params;
            const updateData = req.body;

            const updateUser = await userServices.updateUSer(id, updateData);

            res.status(200).json ({
                succes: true,
                data:updateUser,
                message: 'Usuario creado correctamente'
            });
        }catch (error){
            res.status(500).json({
                succes:false,
                message:error.message
            });

        }
    }

}