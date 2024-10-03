/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type loginPage = typeof import('./pages/LoginPage');
type authPage = typeof import('./pages/AuthPage');
type editorPage = typeof import('./pages/EditorPage')
type articlePage = typeof import('./pages/ArticlePage')
type config = typeof import('./config');

declare namespace CodeceptJS {
  interface SupportObject {
    I: I,
    current: any,
    loginPage: loginPage,
    authPage: authPage,
    editorPage: editorPage,
    articlePage: articlePage,
    config: config
  }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
