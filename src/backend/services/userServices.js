import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient;

export const userService ={
    //crear usuarios
    async createUser(data){
        try{
            const{email, name} = data;
            return await prisma.user.create({
                data :{email, name}
            })
        }catch(error){
            throw error('Error al crear usuario' + error.message);

        }
    },

    // Obtener mis usuarios
    async getAllUsers(){
        try{
            return await prisma.user.findMany();
        }catch(error){
            throw error ('Error al obtener usuarios' + error.message);
        }
    },

    //Actualizar usuario
    async updateUser(){
        try{
            return await prisma.user.update({
                where: {id:parseInt(id)},
                data: data
            });

        }catch(error){
            throw error ('Error al actualizar usuario' + error.message)
        }

    }
}
