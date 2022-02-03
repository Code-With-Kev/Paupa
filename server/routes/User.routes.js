const Users = require("../controller/user.controller");
const { authenticate } = require("../config/jwt");

module.exports = app =>{
    app.post("/api/register", Users.register) 
    app.post("/api/login", Users.login)
    app.get("/api/loggedin", authenticate, Users.getLoggedInUser)
    app.get("/api/logout", authenticate, Users.logout)
}
