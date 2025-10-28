import { verifyToken } from '../utils/auth.js'; //token

export const authenticate = (req, res, next) => {
    try{
        //Verificar si el token es valido
        const token = req.headers.authorization?.split(" ")[1]

        if(!token){
            return res.status(401).json({
                seccess: false,
                message: "Token no proporcionado"
            })
        }

        //Verificar si el tokken es valido
        const decoded = verifyToken(token);
        if(!decoded){
            return res.status(401).json({
                success: false,
                message: "Token invalido o  expirado"
            });
        }

        req.user = decoded;
        next()

    }catch(error){
        res.status(500).json ({
            success: false,
            message: "Error de autenticacion"
        });

    }
}