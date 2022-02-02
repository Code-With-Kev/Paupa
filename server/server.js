const express = require("express");
const app = express();
const cors =  require("cors");
const cookies = require("cookie-parser")

require("./config/mongoose.config")

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) ) ;
app.use( cors({
    credentials: true, origin: 'http://localhost:3000'
}))
app.use(cookies());

require("./routes/Bubble.routes")(app);
require("./routes/Expense.routes")(app);
require("./routes/User.routes")(app)

app.listen( 8000, () => console.log(`Listening on port: 8000`) )