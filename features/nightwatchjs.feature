Feature: Nightwatch

Scenario: Nightwatch Home

  Given I open page "http://nightwatchjs.org"
  Then I expect that element ".container.download" to be present
  And I expect that element ".version" text should be "(v0.9.19)"

