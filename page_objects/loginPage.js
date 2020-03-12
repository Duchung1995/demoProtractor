const waitElement = require('../utils/wait_element');
const CommonConstant = require('../constants/commonConstant');

class LoginPage {
  constructor() {
    this.url = CommonConstant.trangweb3redhostUrl;
    this.txtUserName = element(by.id('mod-login-username'));
    this.txtPassword = element(by.id('mod-login-password'));
    this.btnLogIn = element(by.xpath("//button[@class='btn btn-primary btn-block btn-large login-button']"));
  }

  async goToPage() {
    await browser.get(this.url);
  }

  async logIn(userName, password) {
    await waitElement.waitElementPresent(this.txtUserName);
    await this.txtUserName.sendKeys(userName);
    await this.txtPassword.sendKeys(password);
    await this.btnLogIn.click();
  }
}
module.exports = LoginPage;