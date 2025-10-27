import express from 'express';
import { registerUser } from '../controllers/emailController.js';

const router = express.Router();

/**
 * @swagger
 * /api/email/register:
 *   post:
 *     summary: Registrar usuario y enviar correo ✨
 *     tags: [Email]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - name
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: valeecorny@gmail.com
 *               name:
 *                 type: string
 *                 example: Hola mundo, soy yo, vale tu pro.
 *     responses:
 *       200:
 *         description: Correo enviado exitosamente
 *       400:
 *         description: Petición inválida (faltan datos)
 *       500:
 *         description: Error interno del servidor
 */



router.post('/register', registerUser)

export default router;