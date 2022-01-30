const express = require("express");
const app = express();
const cors =  require("cors")

require("./config/mongoose.config")

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) ) ;
app.use(cors())

require("./routes/Bubble.routes")(app);
require("./routes/Expense.routes")(app);

app.listen( 8000, () => console.log(`Listening on port: 8000`) )