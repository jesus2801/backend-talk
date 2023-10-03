const express = require("express");
const UserRoute = require("./UserRoute");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/:id", UserRoute.get);

app.post("/", UserRoute.add);

app.put("/", UserRoute.update);

app.delete("/:id", UserRoute.delete);

app.listen(port, () => {
  console.log("Example app listening on port " + port);
});
