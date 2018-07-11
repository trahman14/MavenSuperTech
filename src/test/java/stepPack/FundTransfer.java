package stepPack;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FundTransfer extends AbstractClass{

	
	
	@Given("^I am on Online funds transfer page$")
	public void i_am_on_Online_funds_transfer_page() {
	   
		
		driver.get("file:///Users/tarek.rahman/Desktop/WebSite/fundTransfer.html");
	}

	@When("^I select my Name \"([^\"]*)\"$")
	public void i_select_my_Name(String name) {
	    Select ns = new Select(driver.findElement(By.id("payee")));
	    ns.selectByVisibleText(name);
	}

	@When("^amount \"([^\"]*)\"$")
	public void amount(String amount) {
	   driver.findElement(By.id("amount")).sendKeys(amount);
	}

	@When("^I click on the transfer button$")
	public void i_click_on_the_transfer_button() {
	    driver.findElement(By.id("transfer")).click();
	}

	@Then("^I am prompted a success validation message$")
	public void i_am_prompted_a_success_validation_message() {
	    String message = driver.findElement(By.id("message")).getText(); 
	    System.out.println("The validation message is: " + message);
	}

	@When("^I select my name \"([^\"]*)\"$")
	public void i_select_my_name(String name) {
		 Select ns = new Select(driver.findElement(By.id("payee")));
		    ns.selectByVisibleText(name);
	}

	@When("^I click on the Transfer button$")
	public void i_click_on_the_Transfer_button() {
		driver.findElement(By.id("transfer")).click();
	}

	@Then("^I am prompted a failed validation message$")
	public void i_am_prompted_a_failed_validation_message() {
		String message = driver.findElement(By.id("message")).getText(); 
	    System.out.println("The validation message is: " + message);
	}

	@When("^I select my name \"([^\"]*)\" from the dropdown$")
	public void i_select_my_name_from_the_dropdown(String name) {
		Select ns = new Select(driver.findElement(By.id("payee")));
	    ns.selectByVisibleText(name);
	}


}
