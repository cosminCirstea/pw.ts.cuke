@Navigation @Smoke
Feature: Navigate website

    Background: Navigate to the website homepage
        Given that I am on the base url

    Scenario: Navigate through the pages of the website
        When I click on the 'Blog' link
        Then I check that the heading with name 'Recent Posts' is visible
        When I click on the 'Contact' link
        Then I check that the heading with name 'contact us' is visible


