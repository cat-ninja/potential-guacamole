/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type loginPage = typeof import('./pages/login.js');
type dashboardPage = typeof import('./pages/dashboard.js');
type Api = import('./helpers/api.js');

declare namespace CodeceptJS {
  interface SupportObject {
    I: I;
    loginPage: loginPage;
    dashboardPage: dashboardPage;
  }
  interface Methods extends Playwright, Api, ApiDataFactory {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
