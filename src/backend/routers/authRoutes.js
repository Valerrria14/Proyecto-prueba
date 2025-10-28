import express from 'express';
import { authControllers } from '../controllers/authControllers.js';
import { authenticate } from '../middlewares/authMiddlewares.js';

const router = express.Router(); 

/**
 * @swagger
 * components:
 *  securitySchemes:
 *    BearerAuth:
 *      type: http
 *      schemes: bearer
 *      bearerFormat: JWT
 * 
 */

/**
 * @swagger
 * /api/auth/register:
 * post:
 *  summary: Registrar nuevo usuario ✨
 *  tags: [Auth]
 *  requestBody:
 *    required: true
 *    content:
 *      application/json:
 *        schema:
 *          type: object
 *          properties:
 *            email:
 *              type: string
 *              example: valeecorny@gmail.com
 *            name:
 *              type: string
 *              example: Valee
 *            password:
 *              type: string 
 *              example: valetupro1234
 *  responses:
 *    201:
 *      description: Usuario resgistrado exitosamente. ❇️
 *    400:
 *      description: Datos enviados incorrectos. ❌
 *    500:
 *      description: Error interno del servidor. 🤒
 * 
 */

router.post("/register", authControllers.register);



export default router;