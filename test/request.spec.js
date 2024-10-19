const request = require("supertest");
const app = require("../src/lib/app");

describe("request API", () => {
 
  describe("GET /api/request/", () => {
    it("debe devolver un objeto con las solicitudes", async () => {
      const response = await request(app).get("/api/request/");
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe("POST /api/request/", () => {
    it("debe devolver un status 201 y el objeto creado", async () => {
      const newRequest = {
        "code": "ad12",
        "description": "duda2",
        "employeeId": 1,
        "summary": "duda sobre el salario del proximo cargo"
        }
      const response = await request(app)
        .post(`/api/request/`)
        .send(newRequest);

      expect(response.statusCode).toBe(201);
      expect(response.body).toHaveProperty("requestId");
      expect(response.body).toHaveProperty("employeeId");
      expect(response.body).toHaveProperty("summary");
      expect(response.body).toHaveProperty("code");
    });
  });


});
