import express from 'express';
import { userController } from '../controllers/userController.js';

const router = express.Router(); 

// Rutas para llamar el usuario 
router.get('/',userController. getUsers);
router.post('/',userController.createUser);
router.put('/:id',userController.updateUSer);

export default router; 

//Metodo para eliminar DELETE
//Metodo para actualizar PUT
//Metodo para modificar PATCH