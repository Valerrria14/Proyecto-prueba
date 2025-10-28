import { PrismaClient }  from '@prisma/client';
import { hashPassword, comparePassword, verifyToken, generateToken } from '../utils/auth.js';

const prisma = new PrismaClient;

export const authServices = {
    //Registar usuarios
    async registerUSer(data){
        try{
            const{email, name, password} = data;
            const hashedPassword = await hashPassword(password)
            const user = await prisma.user.create ({
                data: {email, name, password: hashedPassword},
            });

            //Enviar token 
            const token = generateToken(user.id,user.email);

            //Enviar ussuario sin password
            const {password: _, ...userWithoutPassword } = user;
            return{
                user: userWithoutPassword,
                token,
            }

        } catch (error) {
            throw new Error("Error al registar usuario" + error);
        }
    },
};