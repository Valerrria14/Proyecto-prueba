// routers/rolesRoutes.js
import express from "express";
import { rolesController } from "../controllers/rolesController.js";

const router = express.Router();

/**
 * @swagger
 * /api/rol:
 *   get:
 *     summary: Obtener lista de roles disponibles. ✨
 *     tags: [Rol]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: Recepcionista
 *               name:
 *                 type: string
 *                 example: Vale
 *               password:
 *                 type: string
 *                 example: valetupro1234
 *     responses:
 *       200:
 *         description: Lista de roles obtenida correctamente. ✨
 *       201:
 *         description: Rol registrado exitosamente ❇️
 *       400:
 *         description: Roles ingresado incorrectamente ❌
 *       500:
 *         description: Error interno del servidor 🤒
 */
router.get("/", rolesController.getRoles);

export default router;
