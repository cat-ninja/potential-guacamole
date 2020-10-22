const qs = require('querystring');
const config = require('dotenv').config();
const expandedConfig = require('dotenv-expand');
expandedConfig(config);

exports.config = {
  bootstrapAll: async () => {},
  bootstrap: async () => {},
  tests: './tests/*.js',
  output: './output',
  helpers: {
    Playwright: {
      url: process.env.URL,
      show: process.env.SHOW === 'true',
      browser: 'chromium',
      waitForNavigation: 'load',
    },
    Api: {
      require: './helpers/api.js',
    },
    REST: {
      endpoint: `${process.env.URL}/api/2`,
      onRequest: request => {
        if (!request.headers.Authorization) request.headers.Authorization = 'Bearer test';
        if (request.data) {
          request.headers['Content-Type'] = 'application/x-www-form-urlencoded';
          request.data = qs.stringify(request.data);
        }
      },
    },
    ApiDataFactory: {
      endpoint: `${process.env.URL}/api/2`,
      REST: {
        onRequest: request => {
          if (!request.headers) {
            request.headers = {};
            request.headers.Authorization = `Bearer test`;
          }
          if (request.data) {
            request.headers['Content-Type'] = 'application/x-www-form-urlencoded';
            request.data = qs.stringify(request.data);
          }
        },
      },
      cleanup: false,
      factories: {
        user: {
          factory: './factories/user.js',
          create: { post: 'person/create' },
        },
      },
    },
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/login.js',
    dashboardPage: './pages/dashboard.js',
  },
  mocha: {},
  name: 'test',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
};
