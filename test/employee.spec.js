const request = require("supertest");
const app = require("../src/lib/app");

describe("Rutas de /api/employee/", () => {
  describe("GET /api/employee/", () => {
    it("debe devolver un objeto con los empleados", async () => {
      const response = await request(app).get("/api/employee/");
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

 
  describe("PUT /api/employee/:id", () => {
    it("debe actualizar un empleado existente y devolver 204", async () => {
      const updatedBook ={
        "roleId": 1,
        "name": "eduard",
        "dateEntry":  "01/01/2024",
        "salary": 400
       };
      const response = await request(app).put("/api/employee/1").send(updatedBook);

      expect(response.status).toBe(204);
    });
  });

  describe("DELETE /api/employee/:id", () => {
    it("debe eliminar un empleado y devolver 204", async () => {
      const response = await request(app).delete("/api/employee/10");
      expect(response.status).toBe(204);
    });
  });
});
