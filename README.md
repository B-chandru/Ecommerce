# 🚀 How to Get Started with GitHub Actions (For Node.js Projects)

If you're new to **GitHub Actions**, don't worry — it's easier than it sounds! GitHub Actions lets you **automate tasks** like testing your code every time you push changes to your repository.

In this project, we've set up a simple GitHub Actions workflow to:

* 📦 Install dependencies
* ✅ Run tests
* 🔁 Do this automatically every time we push code to the `main` branch

Let’s walk through how it works and how to set it up for your own project.

---

## 🛠️ Step 1: Create a Workflow File

Inside your project, create a folder structure like this:

```
.github/workflows/ci.yml
```

In that `ci.yml` file, paste the following:

```yaml
name: CI Pipeline

on:
  push:
    branches:
      - main

jobs:
  test:
      runs-on: ubuntu-latest
      steps:
        - name: Checkout Code
          uses: actions/checkout@v3

        - name: Setup Node.js
          uses: actions/setup-node@v3

        - name: Install Dependencies
          run: npm install

        - name: Run Tests
          run: npm test

```

---

## 💡 What This File Does

Here’s a human-friendly breakdown of what’s happening:

| Step          | What It Does                                                             |
| ------------- | ------------------------------------------------------------------------ |
| `on.push`     | Triggers this workflow whenever you push to the `main` branch            |
| `runs-on`     | Tells GitHub to use an Ubuntu machine for running the steps              |
| `checkout`    | Pulls the latest version of your code from GitHub                        |
| `setup-node`  | Installs Node.js (v20 in this case)                                      |
| `npm install` | Installs your project dependencies                                       |
| `npm test`    | Runs your tests (you should have a `test` script in your `package.json`) |

---

## ✅ How to Know It's Working

Once you push this workflow to your repo:

1. Go to your GitHub repo.
2. Click on the **Actions** tab.
3. You'll see your workflow running automatically on each push.
4. If tests pass — you’ll see a green check ✅. If not, you’ll get a red ❌ with details to debug.

---

## 🧪 Need to Add Tests?

If your project doesn’t have tests yet, here’s a basic setup using [Jest](https://jestjs.io/) and [Supertest](https://github.com/visionmedia/supertest):

Install them:

```bash
npm install --save-dev jest supertest
```

And add a test like this in `test/app.test.js`:

```js
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
```

Then, make sure you have this in your `package.json`:

```json
"scripts": {
  "test": "jest"
}
```

---

## 🎉 That's It!

Now your project is hooked up to GitHub Actions. Every time you push code:

* Tests run automatically
* You get instant feedback
* You catch bugs early

This is the **first step toward continuous integration (CI)** and building more reliable software 🚀

---
