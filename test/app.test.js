const request = require("supertest");
const { app, server, msg } = require("../app");

describe('GET /', () => {
    it("http status code is 200", async () => {
        const response = await request(app).get("/");
        expect(response.status).toBe(200);
        expect(response.text).toBe(`${msg}`);
    });
    afterAll(() => {
        server.close();
    })
});
