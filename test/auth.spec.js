const app = require("../src/lib/app");
const request = require("supertest");

describe("Authentication API", () => {
  describe("POST /api/auth/login", () => {
    it("should respond with a 200 status code and return a token", async () => {
      const userCredentials = {
       
        email: "juanadmin@gmail.com",
        password: "123",
      };

      const response = await request(app)
        .post("/api/auth/login")
        .send(userCredentials);

      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty("token");
      expect(typeof response.body.token).toBe("string");
    });
  });

  describe("POST /api/auth/register", () => {
    it("should respond with a 201 status code and return a user object", async () => {
      const newUser = {
        name: "newuser",
        password: "newpassword",
        email: "aaaa@gmail.com",
      };

      const response = await request(app)
        .post("/api/auth/register")
        .send(newUser);

      expect(response.statusCode).toBe(201);
      expect(response.body).toHaveProperty("name");
      expect(response.body).toHaveProperty("employeeId");
      expect(typeof response.body.employeeId).toBe("number");
    });
  });
});
