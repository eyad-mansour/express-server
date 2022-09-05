"use strict";

const supertest = require("supertest");

const server = require("../server");
const request = supertest(server.app);

describe("API test", () => {
  it("Home server work", async () => {
    const res = await request.get("/");
    expect(res.status).toEqual(200);
    expect(res.text).toEqual("Hello World");
  });
});

describe("API age server", () => {
  it("age test", async () => {
    const res = await request.post("/person");
    const user = {
      name: "eyad",
      age: 25,
      gender: "male",
    };
    const modifiedAge = user.age + 5;
    expect(res.status).toEqual(201);
    expect(res.text).toEqual(`age is 5 more years 30`);
  });
});
