const express = require("express");
// save the express server into a variable
const app = express();
//Sets an initial port.
const PORT = process.env.PORT || 3001;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes")(app);
//Starts up our Server
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));






