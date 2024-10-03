Feature('Авторизация')

Before(({ loginPage }) => {
  loginPage.visit()
})

Scenario('Успешная авторизация', ({ I, loginPage, config }) => {
  loginPage.login(config.credentials.user)
  I.dontSee('Login')
})

Scenario('Нельзя авторизоваться без пароля', async ({ I, loginPage, config }) => {
  loginPage.login({
    email: config.credentials.user.email,
    password: '',
  })
  I.seeInCurrentUrl('/login/error?error=CredentialsSignin&provider=credentials')
})

Scenario('Нельзя авторизоваться без почты', async ({ I, loginPage, config }) => {
  loginPage.login({
    email: '',
    password: 'secret',
  })
  I.seeInCurrentUrl('/login/error?error=CredentialsSignin&provider=credentials')
})

Scenario('Нельзя авторизоваться несуществующему пользователю', async ({ I, loginPage, config }) => {
  loginPage.login({
    email: 'not@found.net',
    password: 'secret',
  })
  I.seeInCurrentUrl('/login/error?error=CredentialsSignin&provider=credentials')
})
