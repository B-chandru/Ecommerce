const request = require("supertest");
const { app, server } = require("../app");

describe('GET /', () => {
    it("http status code is 200", async () => {
        const response = await request(app).get("/");
        expect(response.status).toBe(200);
        expect(response.text).toBe("We are under Development Mode!.............");
    });
    afterAll(() => {
        server.close();
    })
});
