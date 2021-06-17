
const defaultConfig = {
  blockingIsInvisible: false,
}

class ConfigService {
  retrieve() {
    // Pretend this calls out to something on the intranet
    return defaultConfig;
  }
};

const Config = new ConfigService().retrieve();

module.exports = Config;