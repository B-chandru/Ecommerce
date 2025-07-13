const request = require("supertest");
const { app, server, msg } = require("../app");

describe('GET /', () => {
    it("http status code is 200", async () => {
        const response = await request(app).get("/"); //Checking the endpoint
        expect(response.status).toBe(200); //Checking the http/https status code
        expect(response.text).toBe(`${msg}`); //checking the message
        expect(response.headers['x-powered-by']).toBe('Express'); //checking the headers content
    });
    afterAll(() => {
        server.close();
    })
});
