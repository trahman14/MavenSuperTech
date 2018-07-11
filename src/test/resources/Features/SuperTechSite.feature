Feature: Fund Transfer
  I want to transfer funds Online through the funds transfer Application

@validTransfer
  Scenario:1 User should be able to transfer funds successfully
    Given I am on Online funds transfer page
    When I select my Name "Jim"
    And amount "500"
    And I click on the transfer button
    Then I am prompted a success validation message

@declinedTransfer
  Scenario:2 User does not have enough funds and is declined fund transfer
    Given I am on Online funds transfer page
    When I select my name "Tim"
    And amount "7000"
    And I click on the Transfer button
    Then I am prompted a failed validation message

@invalidPayee
  Scenario:3 User is not approved for funds transfer
    Given I am on Online funds transfer page 
    When I select my name "John" from the dropdown
    And amount "200"
    And  I click on the Transfer button
    Then I am prompted a failed validation message 
