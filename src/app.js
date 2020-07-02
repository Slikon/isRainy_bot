"use strict";
exports.__esModule = true;
// Config dotenv
var dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/../.env" });
// Dependencies
var bot_1 = require("./helpers/bot");
var checkTime_1 = require("./middlewares/checkTime");
var help_1 = require("./commands/help");
var i18n_1 = require("./helpers/i18n");
var language_1 = require("./commands/language");
var attachUser_1 = require("./middlewares/attachUser");
// Check time
bot_1.bot.use(checkTime_1.checkTime);
// Attach user
bot_1.bot.use(attachUser_1.attachUser);
// Setup localization
i18n_1.setupI18N(bot_1.bot);
// Setup commands
help_1.setupHelp(bot_1.bot);
language_1.setupLanguage(bot_1.bot);
// Start bot
bot_1.bot.startPolling();
// Log
console.info('Bot is up and running');
