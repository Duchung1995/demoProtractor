const waitElement = require('../utils/wait_element');

class MainPage {
  constructor() {
    this.userIcon = element(by.xpath("//a[@class='dropdown-toggle']//span[@class='icon-user']"));
    
  }
  async isUserIconPresent(){
    return waitElement.waitElementPresent(this.userIcon);
  }
}
module.exports = MainPage;