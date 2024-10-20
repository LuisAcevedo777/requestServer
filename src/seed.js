const db = require('./utils/db'); 
const roleModel = require('./models/role.model'); 
const employeeModel = require('./models/employee.model'); 
const bcrypt = require('bcrypt');

const roles = [
  { roleId: 1, name: 'admin' },
  { roleId: 2, name: 'employee' },
  { roleId: 3, name: 'unauthorized' }
];

const employees = [
  { email: "juanadmin@gmail.com", password: '123', name: "juan", roleId: 1 },
  { email: "juanemployee@gmail.com", password: '123', name: "juan", roleId: 2 },
  { email: "juanunauthorized@gmail.com", password: '123', name: "juan", roleId: 3 }
];

const hashPasswords = async (employees) => {
  return await Promise.all(
    employees.map(async employee => {
      const hashedPassword = await bcrypt.hash(employee.password, 10);
      return { ...employee, password: hashedPassword };
    })
  );
};

const seedRoles = async () => {
  try {
    await roleModel.bulkCreate(roles, { ignoreDuplicates: true });
    console.log("Roles creados exitosamente");

    const hashedEmployees = await hashPasswords(employees);
    await employeeModel.bulkCreate(hashedEmployees, { ignoreDuplicates: true });
    console.log("Employees creados exitosamente");
  } catch (error) {
    console.error("Error al crear roles o employees:", error);
  }
};

const runSeed = async () => {
  try {
    await db.authenticate();
    console.log('Conexión a la base de datos establecida con éxito.');
    await seedRoles();
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  } finally {
    await db.close(); 
    console.log('Conexión a la base de datos cerrada.');
  }
};


//runSeed();
