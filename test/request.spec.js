const request = require("supertest");
const app = require("../src/lib/app");

describe("request API", () => {

  const headers = {

    token: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoianVhbiIsImVtYWlsIjoianVhbmFkbWluQGdtYWlsLmNvbSIsInJvbGVFbXBsb3llZSI6eyJyb2xlSWQiOjEsIm5hbWUiOiJhZG1pbiJ9LCJlbXBsb3llZUlkIjoxLCJkYXRlRW50cnkiOm51bGwsInNhbGFyeSI6MCwiaWF0IjoxNzI5NDkxMjc2LCJleHAiOjE3MzA3ODcyNzZ9.D78LmHWQcue8gPnbZi_PrnfeHDX9K8mTP2aQLJovJjGLjZdCDeQDy84JIoLGpMl7xOoBDWG_u301tHU3Fu2uIg"
  
   }

 
  describe("GET /api/request/", () => {
    it("debe devolver un objeto con las solicitudes", async () => {
      const response = await request(app).get("/api/request/").set(headers);
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
        .set(headers)
        .send(newRequest);

      expect(response.statusCode).toBe(201);
      expect(response.body).toHaveProperty("requestId");
      expect(response.body).toHaveProperty("employeeId");
      expect(response.body).toHaveProperty("summary");
      expect(response.body).toHaveProperty("code");
    });
  });


});
