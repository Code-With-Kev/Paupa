const EnvController = require("../controllers/enc.controllers")

module.exports = (app) => {
    app.get('/api', EnvController.secretMessage)
}