@Login
Feature: Login general actions
# pros: This approach allows for great flexibility and may allow a non-technical person to write business flows from scractch
# cons: A lot of steps need to be written and the scenarios can get quite long
# conclusion: A hybrid approach can offer the best of the two worlds

    Background: Navigation general actions
        When I navigate to the url 'https://automationspeaks.com/'
        Then I check that I am on the url 'https://automationspeaks.com/'

    Scenario: Login and Logout general actions
        # login flow by generic actions
        When I fill the field 'Enter your Username' with data 'username'
        And I fill the field 'Enter your Password' with data 'password'
        And I click on the 'Sign in' button
        Then I check that the element with the text 'The user is logged in' is visible
        # logout flow by generic actions
        When I click on the 'Logout' button
        Then I check that the element with the placeholder 'Enter your Username' is visible

