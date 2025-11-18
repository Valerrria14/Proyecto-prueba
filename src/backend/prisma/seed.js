import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.rol.createMany({
    data: [
      { name: "Recepcionista" },
      { name: "Médico" },
      { name: "Paciente" }
    ]
  });

  console.log("Roles insertados correctamente ✔");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
