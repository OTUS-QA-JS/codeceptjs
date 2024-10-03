const { I } = inject()

export = {
  visit() {
    I.amOnPage('/register')
  },

  fillUsername(username: string) {
    // TODO: implemented
  },

  fillEmail(email: string) {
    // TODO: implemented
  },

  fillPassword(password: string) {
    // TODO: implemented
  },

  submitForm() {
    // TODO: implemented
  },

  signUp(credentials: { username: string; email: string; password: string }) {
    this.visit()
    this.fillUsername(credentials.username)
    this.fillEmail(credentials.email)
    this.fillPassword(credentials.password)
    this.submitForm()
  },
}
