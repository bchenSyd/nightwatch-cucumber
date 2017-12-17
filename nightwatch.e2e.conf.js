const seleniumServer = require('selenium-server');
const phantomjs = require('phantomjs-prebuilt');
const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');

// http://nightwatchjs.org/gettingstarted#basic-settings
module.exports = {
    src_folders: ['e2e'],
    output_folder: 'reports',
    custom_assertions_path: '',
    live_output: false,
    disable_colors: false,
    selenium: {
        start_process: true,
        server_path: seleniumServer.path,
        log_path: '',
        host: '127.0.0.1',
        port: 4444
    },
    test_settings: {
        default: {
            launch_url: 'http://localhost:8080',
            selenium_port: 4444,
            selenium_host: '127.0.0.1',
            desiredCapabilities: {
                browserName: 'phantomjs',
                javascriptEnabled: true,
                acceptSslCerts: true,
                'phantomjs.binary.path': phantomjs.path
            }
        },
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions: {
                    args: ['--start-maximized'],
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
