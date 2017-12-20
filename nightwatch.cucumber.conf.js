const seleniumServer = require('selenium-server');
const phantomjs = require('phantomjs-prebuilt');
const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');

require('nightwatch-cucumber')({
  cucumberArgs: ['--compiler', 'js:babel-core/register', 
  '--require', 'features/step_definitions', 
  '--format', 'json:reports/cucumber.json', 
  'features']
})

module.exports = {
  output_folder: 'reports',
  custom_assertions_path: '',
  live_output: false,
  disable_colors: false,
  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    log_path: 'selenium-log',
    host: '127.0.0.1',
    port: 4444
  },
  test_settings: { // test_settings is nightwatch options;
    default: {
      launch_url: 'http://localhost:3000',
      selenium_port: 4444,
      selenium_host: '127.0.0.1',
      desiredCapabilities: {
        browserName: 'phantomjs',
        javascriptEnabled: true,
        acceptSslCerts: true,
        'phantomjs.binary.path': phantomjs.path,
        "phantomjs.cli.args" : ['--ignore-ssl-errors=true', '--load-images=false']
      }
    },
    chrome: {
      globals:{
        waitForConditionTimeout: 1000 // global waitforelementpresent timeout;
      },
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: ['--start-maximized'],
          prefs: {
            'profile.managed_default_content_settings.images': 2
          }
        },
        javascriptEnabled: true,
        acceptSslCerts: true
      },
      selenium: {
        cli_args: {
          'webdriver.chrome.driver': chromedriver.path,
        }
      }
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        marionette: true
      },
      selenium: {
        cli_args: {
          'webdriver.gecko.driver': geckodriver.path
        }
      }
    }
  }
}
