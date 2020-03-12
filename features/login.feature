Feature: Login

@login_success
Scenario: Login Success
  Given I go to login page
  When I login by username "trang" and password "beheoredweb"
  Then I verify login is success