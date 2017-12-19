Feature: Yahoo Search

Scenario: Searching Yahoo

  Given I open page "http://yahoo.com"
  Then the title is "Yahoo7"
  And the Yahoo search form exists
