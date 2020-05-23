const { remote } = require("electron");
var win = remote.BrowserWindow.getFocusedWindow();
exports.winclose = () => {
  win.close();
};
exports.winmin = () => {
  win.minimize();
};
