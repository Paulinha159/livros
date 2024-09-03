const express = require("express");
const aluguel_route = require("./routes/aluguel_route.js");
const estudante_route = require("./routes/estudante_route.js");
const livro_route = require("./routes/livro_route.js");
const app = express();
const port = 5000;

app.use(express.json());

app.use("/aluguel", aluguel_route);
app.use("/livro", livro_route);
app.use("/estudante", estudante_route);

app.listen(port, () => {
  console.log(`Server running in ${port} port`);
});
