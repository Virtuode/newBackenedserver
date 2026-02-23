import app from "./app.js";

const PORT = process.env.PORT || 10000;

console.log(`Server Running on http://localhost:${PORT}`);

app.listen(PORT);
