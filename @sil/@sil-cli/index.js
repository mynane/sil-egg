const Application = require("./application");

const app = new Application();

app.listen(3000, () => {
  console.log("start server port at 3000");
});
