Feature: React

Scenario: localhost

  Given I open sub page "/components.html#accordion"
  Then I expect that element "[data-reactroot]" to be present
  And I expect that element ".Accordions__header-left" text should be "Terms & conditions"


