const colors = require("colors");
var log = require("fancy-log");

colors.setTheme({
    log: 'grey',
    verbose: 'cyan',
    info: 'green',
    warn: 'yellow',
    debug: 'cyan',
    error: 'red'
});


class Console {
    constructor()
    info(source, msg) {
        log(`${colors.info("[ INFO ]")} ${source} | ${colors.info(msg)}`);
    }

    warn(source, msg) {
        log(`${colors.warn("[ WARNING ]")} ${source} | ${colors.warn(msg)}`);
    }

    error(source, msg) {
        log(`${colors.error("[ ERROR ]")} ${source} | ${colors.error(msg)}`);
    }

    debug(source, msg) {
        log(`${colors.debug("[ DEBUG ]")} ${source} | ${colors.debug(msg)}`);
    }
}

module.exports = new Console();