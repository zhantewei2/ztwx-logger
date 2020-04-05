const {MainLogger,defaultConsoleTransport}=require("./loggerFactory");


const mainLogger=new MainLogger();
mainLogger.config({
  level:"debug"
});
mainLogger.addTransport(defaultConsoleTransport);

module.exports.MainLogger=MainLogger;
module.exports.defaultConsoleTransport=defaultConsoleTransport;
module.exports.LoggerFactory=mainLogger;