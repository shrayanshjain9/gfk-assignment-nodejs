import request from "supertest";
// const request = require("supertest");
// const app = require("../src/server");
import app from "../src/server";

describe("Post Controller", () => {
  afterAll((done) => {
    app.close(done);
  });
  it("should get all posts", async () => {
    const response = await request(app).get("/api/posts");
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("success");
    expect(response.body.data).toBeDefined();
  });

  it("should get a post by ID", async () => {
    const response = await request(app).get("/api/posts/1");
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("success");
    expect(response.body.data).toBeDefined();
  });

  it("should not get a post with invalid ID", async () => {
    const response = await request(app).get("/api/posts/9999");
    expect(response.status).toBe(400);
    expect(response.body.error).toBeDefined();
  });

  it("should create a new post", async () => {
    const newPost = {
      title: "New Post",
      content: "New Content",
    };

    const response = await request(app).post("/api/posts").send(newPost);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("success");
    expect(response.body.data).toBeDefined();
  });

  it("should update an existing post", async () => {
    const updatedPost = {
      title: "Updated Post",
      content: "Updated Content",
    };

    const response = await request(app).put("/api/posts/1").send(updatedPost);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("success");
    expect(response.body.data).toBeDefined();
  });

  it("should not update a post with invalid ID", async () => {
    const updatedPost = {
      title: "Updated Post",
      content: "Updated Content",
    };

    const response = await request(app)
      .put("/api/posts/98755")
      .send(updatedPost);
    expect(response.status).toBe(400);
    expect(response.body.error).toBeDefined();
  });

  it("should delete an existing post", async () => {
    const response = await request(app).delete("/api/posts/1");
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("deleted");
    expect(response.body.changes).toBeDefined();
  });

  it("should not delete a post with invalid ID", async () => {
    const response = await request(app).delete("/api/posts/66856");
    expect(response.status).toBe(400);
    expect(response.body.error).toBeDefined();
  });
});
