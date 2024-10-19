
const db = require('./utils/db'); 
const roleModel = require('./models/role.model'); 

const roles = [
  { roleId: 1, name: 'admin' },
  { roleId: 2, name: 'employee' },
  { roleId: 3, name: 'unauthorized' }
];

const seedRoles = async () => {
  try {
    await roleModel.bulkCreate(roles, { ignoreDuplicates: true });
    console.log("Roles creados exitosamente");
  } catch (error) {
    console.error("Error al crear roles:", error);
  }
};

const runSeed = async () => {
  try {
    await db.authenticate();
    console.log('Conexión a la base de datos establecida con éxito.');
    await seedRoles();
    console.error('No se pudo conectar a la base de datos:', error);
  } finally {
    await db.close(); 
    console.log('Conexión a la base de datos cerrada.');
  }
};


//runSeed();
