$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/SuperTechSite.feature");
formatter.feature({
  "name": "Fund Transfer",
  "description": "  I want to transfer funds Online through the funds transfer Application",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "1 User should be able to transfer funds successfully",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@validTransfer"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on Online funds transfer page",
  "keyword": "Given "
});
formatter.match({
  "location": "FundTransfer.i_am_on_Online_funds_transfer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select my Name \"Jim\"",
  "keyword": "When "
});
formatter.match({
  "location": "FundTransfer.i_select_my_Name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "amount \"500\"",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransfer.amount(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the transfer button",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransfer.i_click_on_the_transfer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am prompted a success validation message",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransfer.i_am_prompted_a_success_validation_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "2 User does not have enough funds and is declined fund transfer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@declinedTransfer"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on Online funds transfer page",
  "keyword": "Given "
});
formatter.match({
  "location": "FundTransfer.i_am_on_Online_funds_transfer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select my name \"Tim\"",
  "keyword": "When "
});
formatter.match({
  "location": "FundTransfer.i_select_my_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "amount \"7000\"",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransfer.amount(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Transfer button",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransfer.i_click_on_the_Transfer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am prompted a failed validation message",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransfer.i_am_prompted_a_failed_validation_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});