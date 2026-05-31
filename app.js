const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
        <h1>AWS DevOps Project Running Successfully 🚀</h1>
        <h2>CI/CD Using Jenkins + Docker + AWS</h2>
    `);
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP",
        message: "Application is healthy"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});