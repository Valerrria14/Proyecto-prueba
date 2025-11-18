import { PrismaClient }  from '@prisma/client';
import { hashPassword, comparePassword, verifyToken, generateToken } from '../utils/auth.js';
import { registerUser } from '../controllers/emailControllers.js';

const prisma = new PrismaClient;

export const authServices = {
    //Registar usuarios
    async login(data) {
  try {
    const { email, password, role } = data;

    let user = await prisma.user.findUnique({
      where: { email },
      include: { role: true },
    });

    if (!user) {
      throw new Error("Email no encontrado");
    }

    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Contraseña incorrecta");
    }

    // 👉 ACTUALIZAR ROL SEGÚN EL BOTÓN DEL FRONTEND
    if (role) {
      user = await prisma.user.update({
        where: { id: user.id },
        data: { roleId: Number(role) },
        include: { role: true },
      });
    }

    const token = generateToken(user.id, user.email);

    const { password: _, ...userWithoutPassword } = user;

    return {
      user: userWithoutPassword,
      token,
    };

  } catch (error) {
    throw new Error(error.message || "Error al iniciar sesión");
  }
}
};