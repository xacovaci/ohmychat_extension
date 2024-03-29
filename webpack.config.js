const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    chatGPTHandler: "./src/content-scripts/chatGPTHandler.js",
    claudeHandler: "./src/content-scripts/claudeHandler.js",
    twitterHandler: "./src/content-scripts/twitterHandler.js",
    youtubeHandler: "./src/content-scripts/youtubeHandler.js",
    pageHandler: "./src/content-scripts/webpageHandler.js",
    background: "./src/background.js",
    settings: "./src/settings.js",
    popup: "./src/popup.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build"),
  },
};
