const withTM = require("next-transpile-modules")(["ui"]);

const { withContentlayer } = require("next-contentlayer");

module.exports = withTM(withContentlayer())