import swaggerJsdoc from "swagger-jsdoc";
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
        title: "API REST - App clinica Hemo", 
        version: "1.0.0",
        descipcion: "Documentacion de API REST con Express, Prisma",
        contact:{
            email: "valeecorny@gmail.com"
        }
    },
    servers: [{
         url: "http://localhost:3000",
         description: "Servidor  de Desarrollo"
    }],
  },
  apis: ["./routers/*.js"],
};
export const swaggerSpec = swaggerJsdoc(swaggerOptions);
