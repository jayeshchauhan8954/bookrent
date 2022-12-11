let express = require("express");
let expressApp = express();
let serverConfig = require("./config/server.config");

expressApp.listen(serverConfig.PORT, () => {
    console.log("server is up and running on PORT " + serverConfig.PORT)
});
