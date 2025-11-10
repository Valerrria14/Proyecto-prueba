import { PrismaClient }  from '@prisma/client';
import { hashPassword, comparePassword, verifyToken, generateToken } from '../utils/auth.js';
import { registerUser } from '../controllers/emailControllers.js';

const prisma = new PrismaClient;

export const authServices = {
    //Registar usuarios
    async register(data){
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

    async login(data){
        try{
            const { email, password } = data;
            const user = await prisma.user.findUnique({
                where: { email }
            });

            if (!user){
                throw new Error("Email no encontrado");
            }

            const isPasswordValid = await comparePassword(password, user.password);
            if (!isPasswordValid){
                throw new Error("Contraseña incorrecta");
            }

            const token = generateToken(user.id, user.email);
            const {password: _, ...userWithoutPassword } = user;
            return {
                user: userWithoutPassword,
                token,
            };
        }catch(error){
            throw new Error(error.message || "Error al iniciar session"); 

        }
    }
};