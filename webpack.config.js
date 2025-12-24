const baseConfig = require("./webpack.remote.base.js");

module.exports = baseConfig({
  name: "userManagement",
  port: 5001,
  exposes: {
    "./UserApp": "./src/AppWithStyles"
  }
});
