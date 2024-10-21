const request = require("supertest");
const app = require("../src/lib/app");

describe("Rutas de /api/employee/", () => {

  const headers = {

    token: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoianVhbiIsImVtYWlsIjoianVhbmFkbWluQGdtYWlsLmNvbSIsInJvbGVFbXBsb3llZSI6eyJyb2xlSWQiOjEsIm5hbWUiOiJhZG1pbiJ9LCJlbXBsb3llZUlkIjoxLCJkYXRlRW50cnkiOm51bGwsInNhbGFyeSI6MCwiaWF0IjoxNzI5NDkxMjc2LCJleHAiOjE3MzA3ODcyNzZ9.D78LmHWQcue8gPnbZi_PrnfeHDX9K8mTP2aQLJovJjGLjZdCDeQDy84JIoLGpMl7xOoBDWG_u301tHU3Fu2uIg"
  
   }


  describe("GET /api/employee/", () => {
    it("debe devolver un objeto con los empleados", async () => {
      const response = await request(app).get("/api/employee/").set(headers);
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

 
  describe("PUT /api/employee/:id", () => {
    it("debe actualizar un empleado existente y devolver 204", async () => {
      const updatedEmployee ={
        "roleId": 1,
        "name": "eduard",
        "dateEntry":  "01/01/2024",
        "salary": 400
       };
      const response = await request(app).put("/api/employee/1").set(headers).send(updatedEmployee);

      expect(response.status).toBe(204);
    });
  });

  describe("DELETE /api/employee/:id", () => {
    it("debe eliminar un empleado y devolver 204", async () => {
      const response = await request(app).delete("/api/employee/10").set(headers);
      expect(response.status).toBe(204);
    });
  });
});
