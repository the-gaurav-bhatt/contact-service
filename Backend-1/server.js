const mongoose = require("mongoose");
const app = require("./app");
const cors = require("cors");
//setting dotenv file in our server
require("dotenv").config({ path: __dirname + "/.env" });
const port = process.env.PORT || 3001;
//MongoDB local Database Connection:

try {
  mongoose.connect(process.env.CONN);
  console.log("Data base connection succesfull");
} catch (err) {
  console.log(err);
}
app.listen(port, () => {
  console.log(`App is running on port ${process.env.PORT}`);
});
