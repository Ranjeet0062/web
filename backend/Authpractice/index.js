const  Express =require("express");
const router=require("./router/userauth")
const app=Express();
app.use(Express.json());
app.use(require("cookie-parser"))
const fileupload = require("express-fileupload");
app.use(fileupload());
const port = 3000;
require("dotenv").config();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
require("./config/database").connect()
app.use("/api/v1",router);
