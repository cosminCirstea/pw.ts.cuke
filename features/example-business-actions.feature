@Login
Feature: Login business actions
# pros: This approach allows for clean test writing based on complex business flows
# cons: If the business flow is not already implemented in code, a non-technical person will not be able to create a new scenario
# conclusion: A hybrid approach can offer the best of the two worlds

    Background: Navigation business actions
        Given that I am on the base url

    Scenario: Login and Logout business actions
        When I login
        Then I logout